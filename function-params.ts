type addType = (n1: number,n2: number)=>number;
type subType = (n1: number,n2: number)=>number

function substraction(n1: number,n2:number): number{
    return n1-n2;
}
// function add(n1: number, n2: number = 0){
//     return n1+n2;
// }
const add = (n1: number,n2: number): number =>{
    return n1+n2;
}
function calculate(n1,n2, calcFn: addType|subType){
    const result = calcFn(n1,n2);
    console.log(result);
}

console.log(calculate(10,20,add));
console.log(calculate(10,20,substraction));

