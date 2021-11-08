'use strict'
const Node=require('./Node')

class Linkedlist {

    constructor() {
      this.tail = null;
      this.head = null;
      this.size = 0
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
    this.size += 1
  }

  kthFromEnd(k){
    let currentNode=this.head;
    let count=this.size-1;
    while(currentNode){
      if (k>=0) {
      if(k===count){
        return currentNode.value;
      }
      if (Math.floor(count / k) === 2) {
        return 'Happy Path';
    }
      count--;
      currentNode=currentNode.next;
    }
    else { return 'K is Not Positive number';}
    return 'Exception';
  }
}


  
  tostring() {
    let current = this.head;
    let str="";
    while (current!==null) {
        str=str+`{${current.value}}->`;
        current=current.next;
    }
    str=str+'NULL';
    return str;   
}    
  
}

module.exports=Linkedlist



