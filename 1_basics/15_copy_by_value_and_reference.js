/**
 *  copy by value 값에 의한 전달
 *  copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value
 * 2) 객체는 copy by reference다
 */

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone +=' 안유진 입니다'
console.log('-----------------');
console.log(original);
console.log(clone);


let originalObj ={
    name : '안유진',
    group : '아이브'
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('-----------------');

originalObj['group']='코드공장'; //객체라서 둘다 바뀌네
console.log(originalObj);
console.log(cloneObj);

console.log('-----------------');
console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj ={
    name: '최지호',
    group : '코드팩토리'
};
cloneObj ={
    name: '최지호',
    group : '코드팩토리'
};
console.log(originalObj === cloneObj); //false가 뜬다!!!
//object는 object 안에 값이 같다고 해서 같은 값이다라고 인식하는게 아니다

const yuJin1= {
    name : '안유진',
    group : '아이브'
};

const yuJin2 = yuJin1;

const yuJin3 = {
    name : '안유진',
    group : '아이브'
};
//true 같은 주소를 참조하기때문에
console.log(yuJin1 === yuJin2);
console.log('-----------------');
//false
console.log(yuJin1 === yuJin3);
console.log(yuJin2 === yuJin3);
console.log('-------------------------------------------------------------------');

/**
 * Spread Operator
 */

const yuJin4 ={
    ...yuJin3
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3 );

const yuJin5={
    year: '2024',
    ...yuJin3
};
console.log(yuJin5);

console.log('---------------------------------------');

//Spread Operator는 순서가 중요한이유!!!
const yuJin6={ 
    name: '임형수',
    ...yuJin3
};

console.log(yuJin6);
console.log('-----------------');
const yuJin7={
    ...yuJin3,
    name: '임형수'
};
console.log(yuJin7);
