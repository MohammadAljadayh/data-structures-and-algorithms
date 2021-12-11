
'use strict';

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    getList() {
        if (!this.head) return 'no list';
        let current = this.head;
        while (current) {
            current = current.next;
        }
    }
}


module.exports=LinkedList;