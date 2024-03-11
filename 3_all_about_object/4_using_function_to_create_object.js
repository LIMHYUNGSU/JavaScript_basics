/**
 * Using function to create objects
 */

function IdolModel(name,year){
    if(!new.target){ //new 키워드 없을 생성자 함수를 쓰는경우
        return new IdolModel(name, year);
    }
    this.name=name;
    this.year=year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
// console.log(yuJin.dance());

//new 키워드 없이 쓰지 말라!!! 있는거만 알아둬
const yuJin2= IdolModel('안유진', 2003);
console.log(yuJin2);

//저위에 this.name / this.year은 어디로 간것일까?
//console.log(global.name);//global객체는 이 파일이 실행이 되었을때 자동으로 생성이 되는
//new 키워드를 사용하지 않고 생성자 함수를 사용하면 this키워드가 global에 붙어서 global의 값들을 설정하게 된다


const IdolModelArrow = (name, year) =>{
    this.name=name;
    this.year=year;
};
const yuJin3 = new IdolModelArrow('안유진',2003);
//new 키워드를 사용할 수 있는것은 일반 함수에서만 사용가능
//Arrow 함수는 사용 못함











