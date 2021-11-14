'use strict';
// const Queue=require('./lib/queue');
// const Stack =require('./lib/stack');
const PseudoQueue =require('./stackandqueue');


let queue = new PseudoQueue();
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(5);

console.log(queue);

// let stack = new Stack();
// console.log("Stack Area");
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// console.log(stack);
// console.log("Queue Area");
// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// console.log(queue);












