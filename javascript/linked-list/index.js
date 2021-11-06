'use strict';


const LinkedList = require('./lib/LinkedList');

let linkedList=new LinkedList()
console.log("Value Inserted to linked list 1,2,3");
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);

console.log("Value sherched if it is on linked list sherched for 3 ");
let checkIncloud =linkedList.includes(3);
console.log(checkIncloud);
console.log("Linked List Details");

console.log(linkedList);
console.log("Linked List Data Values");
console.log(linkedList.tostring());





