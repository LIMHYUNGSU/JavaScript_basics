/**
 * Array Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];
console.log(iveMembers);
//push()
console.log(iveMembers.push('코드공장'));
//push 하고 나서 iveMembers의 새로운 길이가 출력이 된다 push 같은 경우 Array에 새로운 값을
//맨 끝에 추가를 하고 반환값을 추가한 다음의 길이를 반환한다!! 외우기!!!
console.log(iveMembers);

console.log('-----------------');
//pop
console.log(iveMembers.pop()); //맨 마지막 요소를 빼내고 반환하는
console.log(iveMembers);

//shift()
console.log(iveMembers.shift()); // 첫번째 값을 반환받고 삭제하는
console.log(iveMembers);
//unshift()
console.log(iveMembers.unshift('안유진')); // 첫번째 값을 추가하고 새로운 값을 추가한 Array의 길이를 반환
console.log(iveMembers);

console.log('-----------------');
console.log(iveMembers.splice(0,3)); //0번부터 3개의 값들을 삭제하고 삭제한것의 Array를 반환
console.log(iveMembers);

console.log('-------------------------------');
iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

console.log(iveMembers);

//concat() 원래 Array 변경 안됨
console.log(iveMembers.concat('코드공장'));
console.log(iveMembers);
//push와 concat의 차이는 원래 Array를 변경을 하냐?? 안하냐??

//slice() 원래 Array 변경 안됨
console.log(iveMembers.slice(0,3)); //0번 인덱스에서 2번인덱스 까지 지우는 
console.log(iveMembers);
console.log('-------------------------------');


//spread operator
let iveMembers2=[
    ...iveMembers
];
console.log(iveMembers2);

let iveMembers3=[ //배열안에 배열이 들어가는거라 이상해짐...
    iveMembers
];
console.log(iveMembers3);
console.log('----------------------------------------------------------');

let iveMembers4=iveMembers;

console.log(iveMembers4);
console.log(iveMembers4===iveMembers);

//join() 모든 값들을 String으로 엮을때 사용
console.log( iveMembers.join());
console.log( iveMembers.join('/'));

// sort()
// 오름차순

iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());
console.log('-------------------------------');

let numbers= [
    1,
    9,
    7,
    5,
    3
];
console.log(numbers);
console.log('----------------');
//a,b를 비교했을때
//1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
//2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
//3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a,b) =>{
    return a> b ? 1: -1;
});
console.log(numbers);

console.log('----------------');

numbers.sort((a,b) => {
    return a > b ? -1 : 1;
})
console.log(numbers);

//map() x는 array에 있는 값들이 하나씩 들어가면서 =>이후에 반환하는 값으로 대체된다.
//Array를 변경할 수 있는!!!
console.log('-----------------------------------------------------------------------------');
console.log(iveMembers.map((x) => x))
console.log(iveMembers.map((x) => `아이브: ${x}`));
console.log('-----------------------------------------------------------------------------');
console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브 : ${x}`;
    }
    else{
        return x;
    }
}));
console.log('-------------------------------');



//filter()
numbers=[1,8,7,6,3];

console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => x%2===0));
console.log('--------------');

//find() Array형태가 아닌 조건에 맞는 처음 값이 있으면 반환하고 끝!
console.log(numbers.find((x)=>x%2===0));

//findIndex()
console.log(numbers.findIndex((x)=>x%2===0));

// reduce()
console.log(numbers.reduce((p,n) => p + n,0));
