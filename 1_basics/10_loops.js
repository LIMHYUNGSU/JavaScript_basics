/**
 * for문 while문
 */

/**
 * for .. in
 * 
 * key값을 받을 수 있는 반복문!!!
 */

const yujin ={
    name : '안유진',
    year : 2003,
    group : '아이브'
};
for(let key in yujin){
    console.log(key);
};
console.log('-------------');

const iveMembersArray =[
    '안유진', '가을','레이','장원영','리즈','이서'
];
for(let key in iveMembersArray){
    console.log(key); //인덱스 값 = key값
    console.log(`${key} : ${iveMembersArray[key]}`);
};
console.log('-------------');
/**
 * for .. of
 */
for(let value of iveMembersArray){
    console.log(value); //for .. of 를 이용하면 인덱스 값이 아닌 실제 값을 console.log 할 수 있음
}