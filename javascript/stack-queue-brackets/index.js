'use strict';

const BracketValidation =require('./stackqueuebrackets');


let case1 = "{()[]}";
let case2 = "{}(){}";
let case3 = "{}{Code}[Fellows](())";
let case4 = "(](";
let case5 = "{(})";

console.log(BracketValidation(case1));
console.log(BracketValidation(case2));
console.log(BracketValidation(case3));
console.log(BracketValidation(case4));
console.log(BracketValidation(case5));















