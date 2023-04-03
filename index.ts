//Type alias, 파스칼케이스로 써줘야한다.
type Age = number;
type Name = string;
//or비교문을 이용해서 2가지 타입을 동시에 받도록 설정할 수도 있다.
type Uniontype = string | number;

//tuple은 배열의 index에 타입을 지정해주고, 그 배열의 index에는 꼭 그 타입만 들어와야 한다.
//tuple타입도 가능
type Member = [number, boolean];
//tuple형식으로 바로 지정도 가능
const tuples : [string, number, boolean] = ["ss", 1, true]

const a : Uniontype[] = ["1", 1];
let b : Uniontype = 1
b = "1"

type Player = {
    //readonly기능은 말 그대로 수정 불가하게 만드는 기능
    //다만, map이나 filter는 가능
    readonly name:Name,
    age?:Age,
}

const playerMaker = (name:string) : Player => ({name})
                     //인자에 타입지정  //리턴값에 타입지정
const nico = playerMaker("nico");
console.log(nico);
nico.age = 12

//readonly와 tuple은 같이 사용이 가능


//any타입 : 아래와 같이 값이 비어 있는 것을 any라고 표현한다.
//any타입은 타입스크립트에서 벗어나고 싶을때 쓰인다.
const asd = [];
const www : any[] = [1, 2, 3, 4];
const zzz : any = true;
//타입스크립트에서 말이 안되는 연산이지만, any를 사용함으로써 기존 바닐라JS와 같이 강제 적용 해버린다.
//즉, 타입스크립트의 감시에서 벗어나게되는 타입이 = any
console.log( www + zzz );

// ------ 지그부터는 타입스크립트만의 독특한 타입들


//unkown타입 = 가끔 어떤 타입이 들어올지 모를때 사용됨.
let t : unknown;

//여기서 unknown인 t가 작동하게 되는 것은 if문에서 타입을 체크했기 떄문,
//이건 오로지 타입스크립트에서 가능한 타입기능
if(typeof t === 'number') {
    let tt = t + 1;
}
//이것도 if가 있어서 가능한 기능
if(typeof t === 'string') {
    let tt = t.toUpperCase();
}


//void = 아무것도 return하지 않는 함수를 대상으로 사용
//Java의 void함수와 같음
function hello() {
    console.log('x');
}


//never = return하지 않고 오류를 발생시키는 함수 또는 어느 자료형에도 속하지 않을때 never타입이 됨
//ex)
//never타입을 넣어주면 함수가 작동을 안한다.
//하지만 오류를 던져주면 작동한다.
function hallo():never {
    throw new Error("xxx")
}
//ex2
function hallo2(name: string | number) {
    //이 함수에서는 name + 1을 사용하지 못한다. 왜냐하면, string 또는 number 중 어느 하나가 들어올 수 있게 설정했기 떄문
    //그래서 if를 써줘야함.
    if(typeof name === 'string'){
        name
    } else if (typeof name === 'number'){
        name
    } else {
        //여기서 name이 never가 된다.
        //왜냐하면, 결국 마지막에 오는 name은 string도 number형도 아니기 때문
        //그래서 마지막 name은 절대 작동하지 안게 된다.
        name
    }
}
