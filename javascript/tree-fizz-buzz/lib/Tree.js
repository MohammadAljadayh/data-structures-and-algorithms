'use strict';
const Node=require('./Node');
class Tree {
    constructor() {
      this.root = null;
      this.children = [];
    }
    addNode(value) {
        const node = new Node(value);
        if(this.root === null) {
          this.root = node;
        } else {
          this.children.push(node);
        }
        return node;
      }
}

    module.exports = Tree;
