'use strict';


const LinkedList = require('./lib/LinkedList');

let linkedList=new LinkedList()
console.log("Value Inserted to linked list 1,2,3");
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.insertBefore(3,5);
linkedList.insertBefore(2,10);
linkedList.insertAfter(2,8);
linkedList.insertAfter(1,9);
console.log(linkedList);
console.log("Linked List Data Values");
console.log(linkedList.tostring());







