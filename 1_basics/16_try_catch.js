/**
 * try... catch
 * 
 * 1) 발생시킬때 -> 던진다고 한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */

function runner(){
    try{
        console.log('Hello');

        throw new Error('큰 문제가 생겼음 ㄷㄷ');
    
        console.log('Code Factory');
    }catch(e){
        console.log('---catch---');
        console.log(e);
    }finally{ //try에서 에러가 있든지 말든지 무조건 실행하는 부분
        console.log('----finally----');
    }
}
runner();
//throw로 에러를 던지면 바로 catch문으로 간다는 뜻이다~
//실제 에러값(e)을 첫번째 파라미터로 받아서 활용할 수 있다.
//console.log(e)를 통해서 에러를 출력할 수 있음
//catch는 에러를 던지는것을 잡을때 사용하는것이다