/**
 * Super and Override
 */
class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdoModel extends IdolModel{
    //노래 / 춤
    part;

    constructor(name,year,part){
        // this.name = name;
        // this.year = year; 이렇게 해도 되지만
        super(name,year); //부모 클래스를 의미한다... // === IdolModel();
        this.part = part;
    }
    sayHello(){
        //우리가 property 즉, 변수값을 불러올때는 super키워드를 함수안에서 사용하면 안된다.
        //return `안녕하세여 ${this.name}입니다. ${this.part}를 맡고 있습니다.`
        return `${super.sayHello()} ${this.part}를 맡고 있습니다.`
        //super키워드를 쓸때 함수는 실행할 수 있다.
    }
}

const yuJin = new FemaleIdoModel('안유진',2003,'보컬');
console.log(yuJin);

const wonYoung =new IdolModel('장원영',2004,);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log('--------------------------------');
console.log(yuJin.sayHello());



