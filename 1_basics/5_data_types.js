/**
 * 6개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) null
 * 6) Symbol
 * 
 * 7) Object (객체)
 *      Function
 *      Array
 *      Object
 */

//Number type
const age =32;
const tempature = -10;
const pi =3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('----------------------------');

const infinity = Infinity;
const nfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nfinity);

//String type
const codeFactory = '"코"드공장';
console.log( codeFactory);
console.log(typeof codeFactory);

const ive ="'아이브' 안유진";
console.log(ive);

const groupName ='아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);

console.log('----------------------------');

/**
 * Symbol
 * 
 * 유일무이한 값을 생성할때 사용
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 */

const test1 ='1';
const test2 ='1';
console.log(test1===test2);

const symbol1 =Symbol('1');
const symbol2 =Symbol('1');

console.log(symbol1===symbol2);
console.log('----------------------------');
/**
 * Object 타입
 * 
 * Map
 * 키:밸류의 쌍으로 이루어져있다.
 * key:value
 */

const dictionary={
    red:'빨간색',
    orange :'주황색',
    yellow : '노란색'
};
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);
console.log('----------------------------');

/**
 * Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입
 */
const iveMembersArray=[
    '안유진',
    '가을',
    '장원영',
    '레이',
    '리즈',
    '이서'
];
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

//index
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0]= '코드공장';
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시한다
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다
 * Js -> dynamic typing  어떤값이 들어가는냐에 따라서 어떤 타입이 지정이 된다!!!!
 */ 

