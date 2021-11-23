'use strict';

const Node=require('./lib/Node');
const Tree=require('./lib/Tree');
const fizzBuzzTree=require('./fizbuzkarytree')

//K-ary Tree
const KaryTree = new Tree();

KaryTree.addNode(1);
KaryTree.addNode(3);
KaryTree.addNode(7);
KaryTree.addNode(5);
KaryTree.addNode(15);
KaryTree.addNode(4);
KaryTree.addNode(9);

console.log(KaryTree);
console.log(fizzBuzzTree(KaryTree));


















