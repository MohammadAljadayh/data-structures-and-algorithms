"use strict";

'use strict';
 const Queue=require('../lib/queue');
const Stack =require('../lib/stack');

describe("Stack Tests ", () => {

    it("Can successfully push onto a stack", () => {
        let stack = new Stack();
        stack.push(1);
     
        expect(stack.top.value).toBe(1);
    });

    it("Can successfully push multiple values onto a stack", () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        expect(stack.top.value).toBe(5);
    });

    it("Can successfully pop off the stack", () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        stack.pop();
        expect(stack.top.value).toBe(4);
        stack.pop();
        expect(stack.top.value).toBe(3);
    });

    it("Can successfully empty a stack after multiple pops", () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.top).toBe(null);
    });

    it("Can successfully peek the next item on the stack", () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.peek()).toBe(3);
    });

    it("Can successfully instantiate an empty stack", () => {
        let stack = new Stack();
        let newStack = new Stack();
        newStack.push(1);
        newStack.push(2);

        expect(stack).toBeInstanceOf(Stack);
        expect(newStack.isEmpty()).toBe("the stack have values");
    
    });
    it("Calling pop or peek on empty stack raises exception", () => {
      let newStack = new Stack();
    
      newStack.pop();
  
      expect(newStack.pop()).toBe('the stack is Empty')
    
  });


});

describe("Queue Tests ", () => {

  it("Can successfully enqueue into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);

    expect(queue.front.value).toBe(1);
  });
  it("Can successfully enqueue multiple values into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toBe(1);
    expect(queue.rear.value).toBe(3);
  });
  it("Can successfully dequeue out of a queue the expected value", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();


    expect(queue.dequeue()).toBe(2);
  });
  it("Can successfully peek into a queue, seeing the expected value", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

  
    expect(queue.peek()).toBe(1);
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    

    expect(queue.front).toBe(null);
    expect(queue.rear).toBe(null);
  });
  it("Can successfully instantiate an empty queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    let newQueue=new Queue();

    expect(newQueue).toBeInstanceOf(Queue);
    expect(queue.isEmpty()).toBe("the Queue have values");
  });
  it("Calling dequeue or peek on empty queue raises exception", () => {
    let queue = new Queue();
    queue.dequeue();
    queue.peek()

  
    expect(queue.dequeue()).toBe('the Queue is empty');
    expect(  queue.peek()).toBe('the Queue is empty');

  });

});