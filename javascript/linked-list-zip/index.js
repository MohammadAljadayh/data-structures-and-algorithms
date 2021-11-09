'use strict';


const LinkedList = require('./lib/LinkedList');
let list = new LinkedList();

let linkedList1=new LinkedList()
linkedList1.insert(1);
linkedList1.append(2);
linkedList1.append(3);
linkedList1.append(4);
linkedList1.append(5);

let linkedList2 = new LinkedList();
linkedList2.insert(4);
linkedList2.append(6);
linkedList2.append(9);
linkedList2.append(11);
linkedList2.append(7);

console.log(`list 1 : ${linkedList1.tostring()} `);
console.log(`list 2 : ${linkedList1.tostring()} `);

list=list.linkedListZip(linkedList1,linkedList2)
console.log(list.tostring())















