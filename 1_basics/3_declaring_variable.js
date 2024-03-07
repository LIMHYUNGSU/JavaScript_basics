/*
1) var - 더이상 쓰지 않는다. 그러나 자바스크립트는 오래된 언어이기에 실습할때 var 많이 쓴다.
2) let 
3) const
*/

var name ='임형수의 코드공장';
console.log(name);

var age = 25;
console.log(age);

let ive ='아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans='르세라핌';

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당 : 값을 넣어주는것
 */

var name ='코드공장';
console.log(name);

let girlFriend; //var랑 let은 초기값이 undefined이다!!
console.log(girlFriend);