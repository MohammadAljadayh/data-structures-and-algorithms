'use strict';

const Stack = require('./lib/stack');

class PseudoQueue {
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
    }

    enqueue(value) {
        this.pushStack.push(value);
        return this.pushStack.peek();
    }

    dequeue() {

        if (this.popStack.peek() !== 'the stack is Empty') {
            return this.popStack.pop();
        }

        while (this.pushStack.peek() !== 'the stack is Empty') {
            this.popStack.push(this.pushStack.pop());
        }
        return this.popStack.pop();
    }
}
module.exports = PseudoQueue;