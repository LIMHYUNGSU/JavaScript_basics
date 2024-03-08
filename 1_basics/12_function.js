/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 */

/**
 * Arrow 함수
 */

const multiply2 = (x,y) => {
    return x*y;
};
console.log(multiply2(3,4));

const multiply3 = (x,y) => x * y;
console.log(multiply3(4,5));
//둘다 똑같은거임

const multiply5 = x => y => z => `x:${x} y:${y} z:${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x){
    return function(y){
        return function(z){
            return `x:${x} y:${y} z:${z}`;
        }
    }
}
console.log(multiply6(3)(4)(5));
console.log('-------------------------------------------');

const multiplyTwo = function(x,y){
    return x*y;
}
console.log(multiplyTwo(4,5));
console.log('----------------');

const multiplyThree = function(x,y,z){
    console.log(arguments);
    return x * y * z;
}
console.log(multiplyThree(4,5,6));



const multiplyAll = function(...arguments){
     //무한의 파라미터를 사용하는
     return Object.values(arguments).reduce((a,b) => a*b, 1);
}

console.log(multiplyAll(3,4,5,6,7,8,9,10));

//정의 안하고 바로 함수 사용하기

// function(x,y){
//     console.log(x * y);
// }

(function(x,y){
    console.log(x * y);
})(4,5);


console.log(typeof multiply2);
console.log(multiply2 instanceof Object); // 좌측에 있는게 우측과 같은 타입인가?
