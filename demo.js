function substraction(n1, n2) {
    return n1 - n2;
}
function add(n1, n2) {
    if (n2 === void 0) { n2 = 0; }
    return n1 + n2;
}
function calculate(n1, n2, calcFn) {
    var result = calcFn(n1, n2);
    console.log(result);
}
console.log(calculate(10, 20, add));
console.log(calculate(10, 20, substraction));
