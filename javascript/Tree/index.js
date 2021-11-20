'use strict';

const BinaryTree = require('./BinaryTree');
const Node = require('./lib/Node');
const BinarySearchTree=require('./binarySearchTree')

const BT = new BinaryTree();

BT.root = new Node(1, new Node(4, new Node(7), new Node(2)), new Node(3, new Node(9), new Node(6)));

console.log(BT.PreOrder());
console.log(BT.PostOrder());
console.log(BT.InOrder());



const BinarySearch=new BinarySearchTree();
BinarySearch.add(15);
BinarySearch.add(10);
BinarySearch.add(20);
BinarySearch.add(30);
BinarySearch.add(40);
console.log(BinarySearch);
console.log(BinarySearch.contains(40));
console.log(BinarySearch.contains(50));












