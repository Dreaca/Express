const ar1 :[number, string] = [1,"a"];

let [x,y] = ar1;

console.log(x);
console.log(y);

const ar2 =["c","d","e"];

ar1.push(...ar2);

console.log(ar1);
