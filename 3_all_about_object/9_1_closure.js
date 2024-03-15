/**
 * Closure
 * 
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다
 * 
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다"
 */

function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber();
}
console.log(getNumber());

function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();
console.log(runner);
console.log(runner());


/**
 * 1) 데이터 캐싱
 */
function cacheFunction(){
    var number = 10 * 10; //이 계산은 매우 오래걸리는 계산이라고 가정한다면

    function innerCacheFunction(newNumb){
        return number * newNumb;
    }
    
    return innerCacheFunction;
}
const runner2 =cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

console.log('---------------------------------');


function cacheFunction2(){
    var number = 99;

    function increment(){
        number ++;
        return number;
    }
    return increment;
}
const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log('---------------------------------');

/**
 * 정보은닉
 */
function Idol(name,year){
    this.name=name;

    var _year = year;

    this.sayNameAndYear = function(){
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`
    }
}
const yuJin = new Idol('안유진',2003);
console.log(yuJin.sayNameAndYear());

console.group(yuJin.name);
console.log(yuJin._year); //이 값은 존재하지 않는다. this키워드로 저장하지 않았기에

//생성자 함수에서 정의된 새로운 함수에서 나중에 가져 올 수는 있음

