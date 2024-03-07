/**
 * 증가와 감소
 */
let number =1;
number++;
console.log(number);

number --;
console.log(number);
console.log('-------------');

/**
 * 연사자의 위치
 */

let result =1;
console.log(result);

result = number++; //원래 1이라는 number의 값을 result에 저장하고 number+1을 한 값을 console.log
console.log(result,number);

result = number--;
console.log(result,number);

//밑에있는거 작업할때 쓰면 뒤통수 맞는거야~ 음~
result = ++number;
console.log(result,number);

result = --number;
console.log(result,number);
console.log('-------------');
/**
 * 숫자 타입이 아닌 타입에 +,-사용하면 어떻게될까?
 */

let sample ='99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);
console.log('-------------');

/**
 * 비교연산자
 * 
 * 1) 값의 비교 ==
 * 2) 값과 타입의 비교 === 가장 많이 쓴다
 */

console.log(5 == '5');

console.log(5 ==='5');
console.log('-------------');
/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10>0 ? '10이 0보다 크다' : '10이 0보다 작다');