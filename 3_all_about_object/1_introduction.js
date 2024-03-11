/**
 * All about objects
 * 
 * 객체를 선언할때 사용 할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */


const yuJin = {
    name: '안유진',
    year: 2003
}
console.log(yuJin);

class IdoModel{
    name;
    year;
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}
const yuJin1 = new IdoModel('안유진', 2003);
console.log(yuJin1);


//생성자 함수  (이런식으로도 객체를 만들 수 있다!!! 꼭!! 기억하기)
//오래된 라이브러리나 오래된 프로젝트에서 코딩을 하게 된다면 압도적으로 많이 보게됨
function IdolFunction(name,year){
    this.name = name;
    this.year = year;
}

const gaEul = new IdolFunction('가을', 2002);
console.log(gaEul);







