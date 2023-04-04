//call signature만들기
type Add = (a:number, b:number) => number;
//위 콜시그니처를 활용하여 함수를 선언
const add: Add = (a, b) => a + b;


//----


//overloading(오버로딩) = 함수가 여러개의 콜 시그니처를 가질때 발생
type Add2 = {
  (c: number, d: number) : number
  (c: number, d: string) : number
}
//Add2는 2개의 콜시그니처를 가지기 때문에 오버로딩이 발생
//d는 그래서 2개의 타입을 가진다. num|str
//그래서 아래 함수를 활성화 하려면, d를 if로 처리해서 타입을 정해줘야함
// 여기서 return은 num으로 타입이 설정되어 있어 d는 리턴이 안된다.
const add2: Add2 = (c, d) => {
  if(typeof d === 'string') return c
  return c + d
}
//오버로딩 예시 다른 것
type Add3 = {
  (a:number, b:number):number,
  (a:number, b:number, c:number):number,
}
//여기서 c는 옵션이 된다. 인자 2개가 들어올 수도 , 3개가 들어올 수도 있는 상황을 가정한 것
const add3: Add3 = (a, b, c?:number) => {
  //그래서 c값이 들어오는 상황을 조건식으로 만들어 줄 수 있다.
  if(c) return a + b + c
  return a + b
}

console.log(add3(1, 2));
console.log(add3(1, 2, 3));


//----

//polymorphism에 대해 (다형성, generic), 여러 타입의 배열을 가지는 것
//=> 여려가지 다양한 구조, 모양
//+generic타입에 대해서도 학습
type SuperPrint = {
  //TypePlaceholder는 작명을 해준 것이고, 이렇게 generic타입을 생성한다.
  //generic타입이란 들어오는 배열의 값들을 타입스크립트가 분석하여 타입을 정해주는 것
  <TypePlaceholder>(arr: TypePlaceholder[]):void
}

const superPrint: SuperPrint = (arr) => {
  arr.forEach(i => console.log(i))
}

superPrint([1,2,3,4])
superPrint([true, false, true])
superPrint(["a", "b"])
//이것 같은 경우 number, boolean, string이 섞여있지만,
//generic타입을 해줬기 때문에, 타입스크립트가 해당되는 타입을 선언해준다.
superPrint([1, 2, true, false, 'a'])

//다른 예시
//리턴값이 있는 콜시그니처를 만들어주어보자, 똑같이 제너릭타입으로
type SuperPrint2 = {
  <TypePlaceholder>(arr: TypePlaceholder[]):TypePlaceholder
}

const superPrint2: SuperPrint2 = (arr) => arr[0]

const 제1번 = superPrint2([1,2,3,4])
const 제2번 = superPrint2([true, false, true])
const 제3번 = superPrint2(["a", "b"])
//아래 4번 처럼, 제네릭타입으로 여러가지 타입을 가지게 될때, 이걸 다형성(polymorphism)이라고 한다.
const 제4번 = superPrint2([1, 2, true, false, 'a'])

//++++
//Generic Recap
type GenericRecap = <T, M>(a: T[], b:M) => T

const genericRecap: GenericRecap = (a) => a[0]
const 제1번1 = genericRecap([1,2,3,4], "x")
const 제2번2 = genericRecap([true, false, true], {})
const 제3번3 = genericRecap(["a", "b"], true)
const 제4번4 = genericRecap([1, 2, true, false, 'a'], [])
