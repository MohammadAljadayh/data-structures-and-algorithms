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
  insertBefore(value, newValue) {
    const node = new Node(newValue);
    let currentNode = this.head;
    if (currentNode.value === value) {
        node.next = currentNode;
        this.head = node;
       
    }
    while (currentNode) {
        if (currentNode.next.value === value) {
            node.next = currentNode.next;
            currentNode.next = node;
            break;
        }
        currentNode = currentNode.next;
    }
    this.size += 1
}

  insertAfter(value, newValue) {
    let node = new Node (newValue);
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === value) {
            node.next = currentNode.next;
            currentNode.next = node; 
        }
        currentNode = currentNode.next;
    }
    this.size += 1
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



