'use strict';


const mergeSort=require('./lib/mergSort')

let array = [10,2, -5,5, 0, 6, 4,];
console.log(`Original array  ${array}`); 
let sortedArray=mergeSort(array);
console.log (`Sorted array  ${sortedArray}`);