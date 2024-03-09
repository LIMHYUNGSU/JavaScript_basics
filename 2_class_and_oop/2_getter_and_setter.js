/**
 * Getter and Setter
 */

class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할때
     */
    get nameAndYear(){ 
        return `${this.name}-${this.year}`;
    }

    set setName(name){
        this.name = name;
    }
}

const yuJin =new IdolModel('안유진',2003);
console.log(yuJin);
console.log(yuJin.nameAndYear); //getter가 함수처럼 정의했지만 그냥 키값으로 value를 가져오는것처럼 실행해야 한다.

yuJin.setName = '장원영';
console.log(yuJin);

console.log('-----------------------------------------------');


class IdolModel2{
    #name; //private  es7지원이 되는 엔진에서만 사용가능
    year;

    constructor(name,year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name= name;
    }
}

const yuJin2 =new IdolModel2('안유진',2003);  // name이 출력이 안됨
console.log(yuJin2);
console.log('--------------------------------');
console.log(yuJin2.name);
console.log('--------------------------------');
//원래 private값은 외부에서 출력이 불가능 한데 getter를 이용해서 private값을 가지고 올 수 있다.
yuJin2.name='코드팩토리';
console.log(yuJin2.name);

//일반적으로 getter와 setter를 가장 많이 사용하는 경우는 private property가 많을때 사용






