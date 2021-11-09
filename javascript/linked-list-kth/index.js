'use strict';


const LinkedList = require('./lib/LinkedList');

let linkedList=new LinkedList()
console.log("Value Inserted to linked list 1,2,3");
linkedList.insert(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append(6);
linkedList.append(7);

console.log(linkedList);
console.log("Linked List Data Values");
console.log(linkedList.tostring());
console.log("KTH");
console.log(linkedList.kthFromEnd(10));
console.log(linkedList.kthFromEnd(7));
console.log(linkedList.kthFromEnd(-1));
console.log(linkedList.kthFromEnd(0));
console.log(linkedList.kthFromEnd(2));














