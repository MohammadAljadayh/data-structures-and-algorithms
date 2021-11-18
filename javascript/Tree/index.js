'use strict';

const BinaryTree = require('./BinaryTree');
const Node = require('./lib/Node');

const BT = new BinaryTree();

BT.root = new Node(1, new Node(4, new Node(7), new Node(2)), new Node(3, new Node(9), new Node(6)));

console.log(BT.PreOrder());
console.log(BT.PostOrder());
console.log(BT.InOrder());














