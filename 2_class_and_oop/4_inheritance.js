/**
 * Imheritance
 */

class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}
class FemaleIdoModel extends IdolModel{
    dance(){
        return `${this.name}이 춤을 춥니다`
    }
}
class MaleIdoModel extends IdolModel{
    sing(){
        return `${this.name}이 노래를 부릅니다`
    }
}

const yuJin = new FemaleIdoModel('안유진',2003);
console.log(yuJin);

const jiMin = new MaleIdoModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());

console.log(jiMin.sing());


const cf =new IdolModel('임형수',2000)
console.log(cf);
console.log(cf.name);

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdoModel);
console.log(yuJin instanceof MaleIdoModel);

console.log('------------------------------------------------');

console.log(jiMin instanceof IdolModel);
console.log(jiMin instanceof FemaleIdoModel);
console.log(jiMin instanceof MaleIdoModel);