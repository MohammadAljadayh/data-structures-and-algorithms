"use strict";

const Node=require('./Node');

class Stack{
    constructor(){
        this.top=null
    }

    push(value){
        let newNode=new Node(value);
        if(this.top){
            newNode.next=this.top;
            this.top=newNode;
        }
        this.top=newNode;
    }

    pop(){
        
        if(this.top){
            let temp =this.top;
            let popItem=this.top.value;
            this.top=temp.next;
            return popItem;
        }
        return 'the stack is Empty'
    }

    peek(){
        let value;
        if(this.top){
            return this.top.value;
        }
        return 'the stack is Empty'
    }

    isEmpty(){
        if(!this.top){
            return 'the stack is Empty'
        }
        return 'the stack have values'
    }
}




module.exports=Stack;