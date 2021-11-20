
'use strict';
const BinaryTree = require('../BinaryTree');
const Node = require('../lib/Node');
const BinarySearchTree=require('../binarySearchTree')

let tree = null;
describe('Binary Tree', () => {
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

    it('Can successfully return a collection from a preorder traversa', () => {
     
        let expectedOutput = [1,4,7,2,3,9,6];
        let preOrder =  BT.PreOrder();
        expect(preOrder).toEqual(expectedOutput);
    });
    it('Can successfully return a collection from an inorder traversal', () => {
        let expectedOutput = [7,4,2,1,9,3,6];
        let inOrder = BT.InOrder();
        expect(inOrder).toEqual(expectedOutput);
    });

    it('Can successfully return a collection from a postorder traversal', () => {
        let expectedOutput = [7,2,4,9,6,3,1];
        let postOrder = BT.PostOrder();
        expect(postOrder).toEqual(expectedOutput);
    });

    it('Can successfully add a left child and right child to a single root node', () => {
      
        const BinarySearch=new BinarySearchTree();
        BinarySearch.add(15);
        BinarySearch.add(10);
        BinarySearch.add(25);
        expect(BinarySearch.root.value).toEqual(15);
        expect(BinarySearch.root.right.value).toEqual(25);
        expect(BinarySearch.root.left.value).toEqual(10);
    });
});