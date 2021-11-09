"use strict";

const LinkedList = require('../lib/LinkedList');
it(' tow  linked list have a value ',()=>{
  let list = new LinkedList();
  
  let linkedList1=new LinkedList()
  linkedList1.insert(1);
  linkedList1.append(2);
  linkedList1.append(3);
  
  let linkedList2 = new LinkedList();
  linkedList2.insert(4);
  linkedList2.append(6);
  linkedList2.append(9);
  
  list=list.linkedListZip(linkedList1,linkedList2).tostring()
 
 expect(list).toEqual('{1}->{4}->{2}->{6}->{3}->{9}->NULL')
});
it('linkedListZip if list2 empty ',()=>{

  let list = new LinkedList();
  
  let linkedList1=new LinkedList()
  linkedList1.insert(1);
  linkedList1.append(2);
  linkedList1.append(3);
  
  let linkedList2 = new LinkedList();
 
  
  list=list.linkedListZip(linkedList1,linkedList2).tostring()
 expect(list).toEqual('{1}->{2}->{3}->NULL')
});

it('linkedListZip if list1 empty  ',()=>{

  let list = new LinkedList();
  
  let linkedList1=new LinkedList()

  let linkedList2 = new LinkedList();
  linkedList1.insert(1);
  linkedList1.append(2);
  linkedList1.append(3);
  
  
  list=list.linkedListZip(linkedList1,linkedList2).tostring()
 expect(list).toEqual('{1}->{2}->{3}->NULL')
});

