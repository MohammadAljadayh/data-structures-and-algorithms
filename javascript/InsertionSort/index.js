'use strict';


const insertionSort= require('./lib/insertionSort');

let array = [8, 4, 23, 42, 16, 15];
console.log(`Original array  ${array}`); 
let sortedArray=insertionSort(array);
console.log (`Sorted array  ${sortedArray}`);



