'use strict';

const Node =require('./Node')

class LinkedList {

    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }

    insert(value) {
  
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        if (this.length == 0) {
         this.tail=newNode
        }
        this.length += 1
      }

      includes(value) {
        let pointerNode=this.head;
        while(pointerNode!==null){
          if(pointerNode.value==value){
            return true
          }
          pointerNode=pointerNode.next 
        }
        return false
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

    module.exports=LinkedList;




