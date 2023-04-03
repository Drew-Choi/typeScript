//call signature만들기
type Add = (a:number, b:number) => number;
//위 콜시그니처를 활용하여 함수를 선언
const add: Add = (a, b) => a + b;


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
