'use strict';

const PseudoQueue = require('../stackandqueue');

describe('seudo queue', () => {
    it('Can add first item  to PseudoQueue ', () => {
      let queue = new PseudoQueue();
        expect(queue.enqueue(10)).toBe(10);
    });

    it('Can  add many values to  PseudoQueue', () => {
        const pesudo = new PseudoQueue();
        pesudo.enqueue(20);
        pesudo.enqueue(15);
        pesudo.enqueue(10);

        expect(pesudo.pushStack.top.value).toBe(10);
        expect(pesudo.pushStack.top.next.value).toBe(15);
        expect(pesudo.pushStack.top.next.next.value).toBe(20);
        expect(pesudo.pushStack.top.next.next.next).toBeNull();
    });

    it('Can  dequeue one item from  queue', () => {
        const pesudo = new PseudoQueue();
        pesudo.enqueue(20);
        pesudo.enqueue(15);
        pesudo.enqueue(10);
        expect(pesudo.dequeue()).toBe(20);
    });

    it('Can  dequeue many  items from  queue', () => {
        const pesudo = new PseudoQueue();
        pesudo.enqueue(20);
        pesudo.enqueue(15);
        pesudo.enqueue(10);
        pesudo.enqueue(5);
        expect(pesudo.dequeue()).toBe(20);
        expect(pesudo.dequeue()).toBe(15);
        expect(pesudo.dequeue()).toBe(10);
        expect(pesudo.dequeue()).toBe(5);
        expect(pesudo.dequeue()).toBe(`the stack is Empty`);
    });

    it('Dequeue empty stack', () => {
        const pesudo = new PseudoQueue();
        expect(pesudo.dequeue()).toBe('the stack is Empty');
    });
});
