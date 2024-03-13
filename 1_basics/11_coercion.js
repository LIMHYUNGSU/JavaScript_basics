/**
 * 타입 변환
 * 
 * 1) 명시적 : 강제
 * 2) 암묵적
 */

let age = 32;

//명시적
let stringage =age.toString();
console.log(typeof stringage, stringage);

//암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2); //string에는 곱하기가 없으니 암묵적으로 잘~ 곱하기가 된거임
console.log('-------------');
/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof(99).toString());
console.log(typeof(true).toString());

//숫자 타입으로 변환
console.log( typeof parseInt('0'), parseInt('0'));
console.log( typeof parseFloat('0.99'), parseFloat('0.99'));
console.log('-------------');
/**
 * boolean 타입으로의 변환
 */

console.log(!'xqesda'); //외우자 string값 안에 값이 들어 있을때 boolean기준으로 볼때 true 다!!!
console.log(!!'xqesda'); 
console.log(!!''); //값이 없을때는 false다!


console.log(!!{}); //object는 무조건 true!
console.log(!![]); //array는 무조건 true!

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */