/**
 * Object / 객체
 */
//key : value pair
let yuJin = {
    name : '안유진',
    group : '아이브',
    dance : function(){
        return `${this.name}이 춤을 춥니다.`;
    }
};
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

console.log('------------');


const key = 'name';
console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey= 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance : function(){
        return `${this.name}이 춤을 춥니다.`;
    }
};
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드공장';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin'; //존재하지 않는 프로퍼티를 생성 할 수 있다.
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

console.log('-----------------------------------------------------');
/**
 * const로 선언된 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const wonYoung = {
    name : '장원영',
    group : '아이브'
};
console.log(wonYoung);
console.log('--------------------------------------');

//wonYoung = {}; const로 정의를 했기때문에 오류가 발생

wonYoung['group'] = '코드공장';
console.log(wonYoung);

console.log('------------');
/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonYoung));


/**
 * 모든 value값 다 가져오기
 */
console.log(Object.values(wonYoung));

console.log('------------');
const name ='안유진';

const yuJin3= {
    name    //name : name  변수의 이름이 같으면
};
console.log(yuJin3);

