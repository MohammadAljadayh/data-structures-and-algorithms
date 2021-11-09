const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail = newNode;
      this.tail.next = newNode;
    }
    this.length++;
    return this.head;
  }
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }
  
  tostring()
  {
    let current = this.head;
    let str="";
    while (current!==null) {
        str=str+`{${current.value}}->`;
        current=current.next;
    }
    str=str+'NULL';
    return str;   
} 

  
kthFromEnd(k)
{
  let currentNode=this.head;
  if (!this.head){return null}
  if (k>this.length){ return('erorr k is greater than the length of the linked list')}
  if (k==this.length){ return('erorr k and the length of the list are the same')}
  if (k<0){ return('erorr k is not a positive integer')}
  
 if (k==this.length-1){return this.head.value}
  for (let i=this.length-1;i>k;i--){
  currentNode=currentNode.next;
  }
  return currentNode.value;

}


}
  module.exports=LinkedList;

