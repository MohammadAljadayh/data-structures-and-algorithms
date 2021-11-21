
'use strict';
const BinaryTree = require('../BinaryTree');
const Node = require('../lib/Node');
const BinarySearchTree=require('../binarySearchTree')

let tree = null;
describe('Max Value Of Tree', () => {
    const BT = new BinaryTree();
    BT.root = new Node(1, new Node(4, new Node(7), new Node(2)), new Node(3, new Node(9), new Node(6)));

    it('Can successfully instantiate an empty tree', () => {
        const BT = new BinaryTree();
        expect(BT.root).toBeNull();
    });

    it('Can successfully instantiate a tree with a single root node', () => {
      
        const BT = new BinaryTree();
        BT.root = new Node(1);
        expect(BT.root.value).toEqual(1);
    });

    it('Can successfully Find Max Value Of the Tree ', () => {
      
        const BT = new BinaryTree();
        BT.root = new Node(1, new Node(4, new Node(7), new Node(2)), new Node(3, new Node(9), new Node(6)));
        expect(BT.findMaximumValue()).toEqual(9);
    });


});