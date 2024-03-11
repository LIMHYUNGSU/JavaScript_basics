/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                      설정할때 호출되는 함수로 구성된 프로퍼티
 *                      예를들면 getter와 setter
 * 
 * 
 */

const yuJin= {
    name : '안유진',
    year : 2003
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
console.log('---------------------------------');
/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을
 *                  수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in loop등을 사용 할 수 있으면
 *                  true를 반환한다.
 * 4)configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다
 *                  false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
 *                  단, writable이 true인 경우 값 변경과 wirtable을 변경하는건 가능하다.
 * 
 * 이 기능들은 내가 객체를 생성할때 섬세하게 작업하고 싶을때 
 * Property Attribute를 사용하면 된다...
 */

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));

console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 ={
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set setAge(age){
        this.year= new Date().getFullYear() - age;
    }
}
console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.setAge =32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2,'age'));

// yuJin2.height =172;
// console.log(yuJin2);
// console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));

Object.defineProperty(yuJin2,'height',{ //실제 Attribute를 조종할 수 있음
    value: 172,
    writable: true,
    enumerable : true,
    configurable : true
})
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));

console.log('-----------------------------------------------------');
//유진이 키를 172에서 180으로 바꾸는데
yuJin2.height= 180; 
console.log(yuJin2);
//내가 Attribute에서 writable를 false로 주고...
Object.defineProperty(yuJin2,'height',{ 
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));
//false인 상태에서 다시 키를 172로 바꾼다고 하면....
console.log('-----------------------------------------------------');

yuJin2.height=172;
console.log(yuJin2);
// 키가 172가 아닌 180이 출력이 된다.......
console.log('-----------------------------------------------------');

/**
 * Enumerable //열거 기능 여부
 */

console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key); //열거 기능이 되기때문에 loop가 사용 가능한것
}

Object.defineProperty(yuJin2,'name',{
    enumerable : false
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
console.log('-----------------------------------------------------');

console.log(Object.keys(yuJin2)); //name키가 열거가 안됨

for(let key in yuJin2){ //name키가 열거가 안됨
    console.log(key); 
}

console.log(yuJin2);
console.log(yuJin2.name); //name이 사라진것은 아님... 다만 열거를 할 수 없을 뿐이다.

/**
 * Configurable
 */

Object.defineProperty(yuJin2, 'height',{
    writable : true, 
    configurable : false
});
//configurable를 false 상태에서 내가 enumerable의 상태를 바꾸고 싶다면...
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
// Object.defineProperty(yuJin2, 'height',{
//     enumerable : false
// }); //에러가 발생한다

//단, wirtable이 true인 경우 값 변경과 writable을 변경하는건 가능하다.

Object.defineProperty(yuJin2,'height',{
    value:172
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
console.log('-----------------------------------------------------');

//configurable가 false인 상태에서 writable를 false로 바꾸고
Object.defineProperty(yuJin2,'height',{
    writable : false
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

//configurable가 false인 상태에서 다시 writable를 true로 바꾸려고 하면...

Object.defineProperty(yuJin2,'height',{
    writable : true
}); //에러 발생


//configurable가 false인 상태에서
//writable이 true일 때는 value값은 바꿀 수 있어
//writable이 false로 바꿀 수 도 있어
//그러나 writable이 false에서 true로 바꾸는건 안돼!!! 예외얌!!!