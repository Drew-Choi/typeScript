const a = ["1", 1];
let b = 1;
b = "1";
const playerMaker = (name) => ({ name });
//인자에 타입지정  //리턴값에 타입지정
const nico = playerMaker("nico");
console.log(nico);
nico.age = 12;
