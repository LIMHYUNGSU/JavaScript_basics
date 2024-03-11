/**
 * Immutable Object
 */
const yuJin ={
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set setAge(age){
        this.year= new Date().getFullYear() - age;
    }
}

console.log(yuJin);

/**
 * Extensible - 확장이 가능한지 (많이 사용하지는 않아...)
 */
console.log(Object.isExtensible(yuJin)); //기본 객체의 isExtensible 값은 true이다.


yuJin.position = 'vocal';
console.log(yuJin);

Object.preventExtensions(yuJin);//확장 방어 ㄷㄷ
console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브'
console.log(yuJin); //groupName이라는 프로퍼티가 생성되지 않음 (err 메세지를 보내지도 않음... ㄷㄷㄷ)

//그럼 삭제는 될까???
delete yuJin['position'];
console.log(yuJin); //삭제는 되네...

console.log('-----------------------------------------');


/**
 * Seal  봉인
 */

const yuJin2 ={
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set setAge(age){
        this.year= new Date().getFullYear() - age;
    }
}

console.log(Object.isSealed(yuJin2));//봉인이 되어있냐 안되어 있냐?? 기본값 false

Object.seal(yuJin2); //  봉! 인!
console.log(Object.isSealed(yuJin2));

yuJin2['groupName']='아이브'
console.log(yuJin2);

delete yuJin2['name'];
console.log(yuJin2);
//둘다 안된다(이 또한 err를 출력하지 않음)
console.log('-----------------------------------------');

Object.defineProperty(yuJin2, 'name',{
    writable : false
});
console.log(Object.getOwnPropertyDescriptor(yuJin2,'name'));
//우리가 seal를 하면은 프로퍼티 애드리뷰트도 바꿀 수 없을 것 같았는데 변경이 된다...
//그런데 여기서 중요한것은 configurable은 false로 바뀌어 있는것
//즉, seal을 하는 작업은 configurable을 false로 바꾸는거랑 똑같은거다








console.log('-----------------------------------------');
/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능 하게 한다.
 */
const yuJin3 ={
    name : '안유진',
    year : 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set setAge(age){
        this.year= new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3));







Object.freeze(yuJin3);// 얼! 음!
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName']='아이브'
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);
//둘 다 안된다

// Object.defineProperty(yuJin3,'name',{
//     value: '코드팩토리'
// }); //이번엔 value값도 안바뀜
console.log(Object.getOwnPropertyDescriptor(yuJin3,'name'));

const yuJin4={
    name : '안유진',
    year : 2003,
    wonYoung: { //객체 안에다가 또 객체를 넣을 수 있음
        name: '장원영',
        year: 2004
    }
};

Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));//당연히 얼었고

console.log(Object.isFrozen(yuJin4['wonYoung']));//원영은 얼지 않았다... ㄷㄷ
//상위 객체가 Freeze되었다고 해서 하위 객체도 얼! 음! 이 되는것은 아니다!!!!!!
//Extensible과 Seal도 마찬가지임


