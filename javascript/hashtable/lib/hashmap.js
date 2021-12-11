
const LinkedList = require('./linkedlist');
class Hashmap {
    constructor(size) {
        this.storage = new Array(size);
        this.size = size;
    }

    hash(key) { 
        return key.split('').reduce((acc, cur) => {
            return acc + cur.charCodeAt(0);
        }, 0) * 50 % this.size;
    }

    set(key, val) { 
        let hash = this.hash(key);
        if (!this.storage[hash]) {
            let ll = new LinkedList();
            ll.add([key, val]);
            this.storage[hash] = ll;
        } else {
            this.storage[hash].add([key, val]);
        }
    }

    contains(key) { 
        let hashedKey = this.hash(key);
        if (!this.storage[hashedKey]) return false;
        return true;
    }

    get(key) { 
        if (!this.contains(key)) {
            return 'no values at this key';
        }
        let hashedKey = this.hash(key);
        let current = this.storage[hashedKey].head;
        while (current) {
            if (current.val[0] === key) {
                return current.val;
            }
            current = current.next;
        }
        return 'no values at this key';
    }

}

module.exports=Hashmap;

