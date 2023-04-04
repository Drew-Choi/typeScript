"use strict";
//위 콜시그니처를 활용하여 함수를 선언
const add = (a, b) => a + b;
//Add2는 2개의 콜시그니처를 가지기 때문에 오버로딩이 발생
//d는 그래서 2개의 타입을 가진다. num|str
//그래서 아래 함수를 활성화 하려면, d를 if로 처리해서 타입을 정해줘야함
// 여기서 return은 num으로 타입이 설정되어 있어 d는 리턴이 안된다.
const add2 = (c, d) => {
    if (typeof d === 'string')
        return c;
    return c + d;
};
//여기서 c는 옵션이 된다. 인자 2개가 들어올 수도 , 3개가 들어올 수도 있는 상황을 가정한 것
const add3 = (a, b, c) => {
    //그래서 c값이 들어오는 상황을 조건식으로 만들어 줄 수 있다.
    if (c)
        return a + b + c;
    return a + b;
};
console.log(add3(1, 2));
console.log(add3(1, 2, 3));
const superPrint = (arr) => {
    arr.forEach(i => console.log(i));
};
superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b"]);
//이것 같은 경우 number, boolean, string이 섞여있지만,
//generic타입을 해줬기 때문에, 타입스크립트가 해당되는 타입을 선언해준다.
superPrint([1, 2, true, false, 'a']);
const superPrint2 = (arr) => arr[0];
const 제1번 = superPrint2([1, 2, 3, 4]);
const 제2번 = superPrint2([true, false, true]);
const 제3번 = superPrint2(["a", "b"]);
//아래 4번 처럼, 제네릭타입으로 여러가지 타입을 가지게 될때, 이걸 다형성(polymorphism)이라고 한다.
const 제4번 = superPrint2([1, 2, true, false, 'a']);
const genericRecap = (a) => a[0];
const 제1번1 = genericRecap([1, 2, 3, 4], "x");
const 제2번2 = genericRecap([true, false, true], {});
const 제3번3 = genericRecap(["a", "b"], true);
const 제4번4 = genericRecap([1, 2, true, false, 'a'], []);
const nicolas = {
    name: "nico",
    extraInfo: {
        favFood: 'kimchi'
    }
};
const lynn = {
    name: 'lynn',
    extraInfo: null,
};
let a7 = [1, 2, 3, 4];
function printAllNumbers(arr) {
}
