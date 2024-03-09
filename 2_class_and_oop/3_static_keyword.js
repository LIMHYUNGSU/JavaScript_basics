/**
 * Static Keyword
 */

// class IdolModel{ 
//     name ;
//     year ; 
//     static groupName = '아이브';

//     constructor(name, year){
//         this.name = name;
//         this.year= year;
//     }

//     static returnGroupName(){
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진',2003);
// console.log(yuJin);


// console.log(IdolModel.groupName);
// //static 키워드를 사용하면 class자체에 귀속이 되는것이지 인스턴스에 귀속되는 것이 아니다.

// console.log(IdolModel.returnGroupName());

//유용하게 쓰는곳은 언제일까?
/**
 * factory constructor
 */


class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name= name;
        this.year= year;
    }

    static fromObject(object){
        return new IdolModel(
            object.name,
            object.year
        );
    }

    static fromList(list){
        return new IdolModel(
            list[0],
            list[1]
        );
    }
}
//const yuJin2= new IdolModel('안유진', 2003);
const yuJin2= IdolModel.fromObject({
    name : '안유진',
    year : 2003
});
console.log(yuJin2);
//우리가 new 키워드를 쓰지도 않았는데 생김!!!

const wonYoung = IdolModel.fromList(
    [
        '장원영',
        2004
    ]
);
console.log(wonYoung);

/**
 * 단순히 하나의 constructor형태 로만 인스턴스를 반환받지 않고
 * 미리 어떤 데이터를 입력받아서 인스턴스를 만들지 템플릿터에서 정의를 해놓을 수 있다라는 장점...
 */