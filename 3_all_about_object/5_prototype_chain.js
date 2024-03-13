/**
 * Prototype
 */

const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);

function IdolModel(name,year){ 
    this.name = name;
    this.year = year;
} //생성자 함수

console.log(IdolModel.prototype);

console.dir(IdolModel.prototype, {
    showHidden: true
});
//constructor 라는 key가 있고 IdoModel함수가 실제로 value값으로 들어가 있음...


//circular reference
console.log(IdolModel.prototype.constructor === IdolModel); //true가 나온다
// 즉, IdolModel안에 prototype 안에constructor 키의 값은 IdoModel 함수라는 것을 알 수 가 있다
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yuJin = new IdolModel('안유진',2003);
console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);
console.log('--------------------------');
console.log(testObj.__proto__ === Object.prototype);


console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype); 
console.log(IdolModel.prototype.__proto__===Object.prototype); 

console.log('---------------------------------');
console.log(yuJin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year){
    this.name = name;
    this.year = year;


    this. sayHello = function(){
        return `${this.name}이 인사를 합니다.`;
    }
}
console.log('---------------------------------');
const yuJin2 = new IdolModel2('안유진',2003);
const wonYoung = new IdolModel2('장원영',2004);

console.log(yuJin2.sayHello());
console.log(wonYoung.sayHello());
console.log(yuJin2.sayHello === wonYoung.sayHello);
//yuJin2의 고유값과 wonYoung의 고유값이 다르기에 같은기능의
//sayHello지만, 메모리 공간에서는 다른 공간을 차지하기에 sayHello는 다르다
console.log('---------------------------------');

console.log(yuJin2.hasOwnProperty('sayHello')); //상속받은것이 아닌 고유 프로퍼티 인지?!

//그런데 우리는 효율이 중요해 sayHello 프로퍼티가 공유되었으면 해!!

console.log('---------------------------------');

function IdolModel3(name,year){
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello=function(){
    return `${this.name}이 인사를 합니다.`;
}
const yuJin3 = new IdolModel3('안유진',2003);
const wonYoung3 = new IdolModel3('장원영',2004);

console.log(yuJin3.sayHello());
console.log(yuJin3.sayHello === wonYoung3.sayHello);
console.log('---------------------------------');

console.log(yuJin3.hasOwnProperty('sayHello'));

console.log('---------------------------------');
//생성자 함수로 객체를 만들었을때 그 안에 static 키워드를 사용한 값은 어떻게 생성 하나???
//모든 함수는 객체이기 때문에 그냥 그대로 붙이면 됨
IdolModel3.sayStaticHello = function(){
    return '안녕하세요 저는 static method 입니다';
}

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */

function IdolModel4(name,year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
    return '안녕하세여 저는 인스턴스 메서드 입니다.';
    }
    //상속 받은 prototype.sayHello를 인스턴스의 sayHello로 덮어 씌울 수 있다.
}
IdolModel4.prototype.sayHello = function(){
    return '안녕하세여 저는 prototype 메서드 입니다.';
}
//이를 프로퍼티 셰도잉 = class에서 override랑 같음
const yuJin4 = new IdolModel4('안유진', 2003);
console.log(yuJin4.sayHello());


console.log('---------------------------------');


/**
 * getPrototypeOf , setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 protype 변경
 */


function IdolModel(name,year){
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello=function(){
    return `${this.name} 인사를 합니다.`;
}

function FemaleIdoModel(name,year){
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}가 춤을 춥니다.`;
    }
}


const gaEul =new IdolModel('가을',2002);
const ray =new FemaleIdoModel('레이',2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);

console.log('---------------------------------');

console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); //가을의 proto값을 가지고 올 수 있음


console.log(Object.getPrototypeOf(ray) === FemaleIdoModel.prototype); 

console.log('---------------------------------');


console.log(gaEul.sayHello());
console.log(ray.dance());
//console.log(ray.sayHello()); //당연히 오류지

//sayHello를 ray도 IdoModel의 prototype으로 상속 받고 싶다

Object.setPrototypeOf(ray, IdolModel.prototype);

//그럼 이제 되것지!!
console.log(ray.sayHello());

console.log('---------------------------------');

console.log(ray.constructor === FemaleIdoModel); //false
console.log(ray.constructor === IdolModel); //true
// prototype을 바꾸었기 때문에

console.log(gaEul.constructor === IdolModel);
console.log(Object.getPrototypeOf(ray) === FemaleIdoModel.prototype);
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype);
console.log(FemaleIdoModel.prototype === IdolModel.prototype);


//함수의 protype 변경
FemaleIdoModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdoModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo)===FemaleIdoModel.prototype);












