'use strict';


const quickSort=require('./lib/quickSort')

let array = [10,2,-5,5, 0, 6, 4];
console.log(`Original array  ${array}`); 
let left = 0;
let right = array.length - 1;
quickSort(array,left,right);
console.log (`Sorted array  ${array}`);