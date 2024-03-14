/**
 * Scope
 */

var numberOne =20;

function levelOne(){
    console.log(numberOne); //20
}
//levelOne(); //20

function levelOne(){
    var numberOne =40;

    console.log(numberOne); //40

}
//levelOne(); //40

console.log(numberOne);

function levelOne(){
    var numberOne =40;

    function levelTwo(){
        var numberTwo = 99;

        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelOne numberOne : ${numberOne}`);
    }
    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();
//모든 선언은 가장 가까운 scope부터 활용을 하게 된다

console.log(numberOne);
//console.log(numberTwo); //함수 안에 있기에

console.log('--------------------------------------');
/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 
 * 실행한 위치가 상위 스코프를 정한다
 */

var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();
}
function functionTwo(){
    console.log(numberThree);
}
functionOne(); //3이 출력이 된다 (global scope에서 가져 왔다)
//자바스크립트는 Lexical Scope이기때문에 fuctionTwo의 상위 스코프는 global scope가 되는것이다

console.log('--------------------------------------');

var i = 999;
for(var i = 0; i<10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`); 
//for반복문이나 if, while  var 키워드를 사용했을때 새로운 scope를 만들지 않는다
// i가 그대로 global scope로 적용이 되서 999였는데 global scope도 10으로 변함
console.log('--------------------------------------');


i = 999;
//block level scope
for(let i =0; i<10; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`);  //변경이 안됨/ 새로운 스코프를 만듬

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */






