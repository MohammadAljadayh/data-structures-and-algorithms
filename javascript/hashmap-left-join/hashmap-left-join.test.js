'use strict';
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

}


class Hashmap {
    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }
    hash(key) {
        const sumCharCode = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);
        const hashKey = (sumCharCode * 19) % this.size;
        return hashKey;
    }

    add(key, value) { 
        let hash;
        if (typeof key === "number") {
            hash = key;
        } else {
            hash = this.hash(key);
        }
    
        if (!this.storage[hash]) {
            const ll = new LinkedList();
            ll.insert({ [key]: value });
            this.storage[hash] = ll; 
        } else {
            this.storage[hash].insert({ [key]: value });
        }
    }


    leftJoin(leftHash, rightHash) {
        let leftJoinArray = [];
        let matchedData = [];
        for (let i = 0; i < leftHash.storage.length; i++) {
            matchedData = [];
            if (leftHash.storage[i]) {
                const leftKey = Object.keys(leftHash.storage[i].head.value);
                const leftValue = Object.values(leftHash.storage[i].head.value);
                matchedData = matchedData.concat(leftKey);
                matchedData = matchedData.concat(leftValue);
                if (rightHash.storage[i]) {
                    const rightKey = Object.keys(rightHash.storage[i].head.value);
                    const rightValue = Object.values(rightHash.storage[i].head.value);
                    if (rightKey[0] === leftKey[0]) {
                        matchedData = matchedData.concat(rightValue);
                    }
                } else {
                    matchedData.push("NULL");
                }
                leftJoinArray.push(matchedData);
            }
        }
        return leftJoinArray;
    }
}

describe("LEFT JOIN TESTS", () => {
    let leftHashTable;
    let rightHashTable;

    leftHashTable = new Hashmap(5000);
    leftHashTable.add("fond", "enamored");
    leftHashTable.add("warth", "anger");
    leftHashTable.add("diligent", "employed");
    leftHashTable.add("outfit", "garb");
    leftHashTable.add("guide", "usher");

    rightHashTable = new Hashmap(5000);
    rightHashTable.add("fond", "averse");
    rightHashTable.add("warth", "delight");
    rightHashTable.add("diligent", "idle");
    rightHashTable.add("guide", "follow");
    rightHashTable.add("flow", "jam");


    it(" return the left join between two hashmaps", () => {
        let expectedResults = [
            ["warth", "anger", "delight"],
            ["diligent", "employed", "idle"],
            ["outfit", "garb", "NULL"],
            ["fond", "enamored", "averse"],
            ["guide", "usher", "follow"],
        ];
        let hashTable = new Hashmap(5000);

        expect(hashTable.leftJoin(leftHashTable, rightHashTable)).toEqual(
            expectedResults
        );
    });
});
