/**
 * Class Keyword
 */

class IdolModel{ //대문자로 시작하는~
    name ;
    year ; //생략은 가능하지만 팀플,소통하기 위해서는 명시해주는게 좋지

    constructor(name, year){
        this.name = name;
        this.year= year;
    }

    sayName(){
                return `안녕하세여 저는 ${this.name} 입니다.`
            };
}

//constructor - 생성자
//this는 현재 인스턴스 이기때문에 this.name은 (맨 위에 있는)name이다!! 

const yuJin = new IdolModel('안유진',2003);
console.log(yuJin); //클래스에 해당하는 객체가 출력
const gaeul = new IdolModel('가을', 2002);
console.group(gaeul);


console.log(yuJin.name);
console.log(yuJin.year);

// //메소드 class내의 함수
// class IdolModel{ 
//     name ;
//     year ; 

//     constructor(name, year){
//         this.name = name;
//         this.year= year;
//     };

//     sayName(){
//         return `안녕하세여 저는 ${this.name} 입니다.`
//     };

// }

console.log(yuJin.sayName()); 
console.log(gaeul.sayName()); 

console.log(typeof IdolModel); //클래스는 함수로 인식이 된다
console.log(typeof yuJin); //클래스로 생성한 인스턴스는 객체(object)다!!