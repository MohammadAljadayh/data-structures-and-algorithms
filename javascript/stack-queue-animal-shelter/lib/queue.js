"use strict";
const Node = require("./Node");

class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }

    enqueue(value){
        let newNode=new Node(value);
        if(!this.front){
            this.front=newNode;
            this.rear=newNode;
        }else{
            this.rear.next=newNode;
            this.rear=newNode;
        }
    }

    dequeue(){
        if(!this.front){
            return ('the Queue is empty'); 
        }
        let lastNode=this.front;
        if(this.front===this.rear){
            this.rear=null;
        }
        this.front=this.front.next;

        return lastNode.value;
    }

    peek(){
        let value;
        if (this.front) {
            return this.front.value;
        }
        return ('the Queue is empty'); 
    }

    isEmpty(){
        if(!this.front){
            return ('the Queue is empty'); 
        }
        return 'the Queue have values'
    }
    
}



  
  module.exports=Queue ;

  
  