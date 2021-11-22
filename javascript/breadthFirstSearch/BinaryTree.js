'use strict';

const Node=require('./lib/Node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }


//  Read -> Left -> Right


  PreOrder() {
    let arrayOfReadNodes = [];

    const _walk = (node) => {

      arrayOfReadNodes.push(node.value);
  
      if (node.left) { _walk(node.left) }
 
      if (node.right) { _walk(node.right) }
    }

    _walk(this.root);
    return arrayOfReadNodes;
  }

  
  //  * Post-Order: Left -> Right -> Read

  PostOrder() {
    let arrayOfReadNodes = [];

    const _walk = (node) => {

      if (node.left) { _walk(node.left) }

      if (node.right) { _walk(node.right) }
  
      arrayOfReadNodes.push(node.value);
    }

    _walk(this.root);
    return arrayOfReadNodes;
  }


  //  * In Order: : left -> Read -> Right

  InOrder() {
    let arrayOfReadNodes = [];

    const _walk = (node) => {
  
      if (node.left) { _walk(node.left) }
    
      arrayOfReadNodes.push(node.value);

      if (node.right) { _walk(node.right) }
    }

    _walk(this.root);
    return arrayOfReadNodes;
  } 


  
findMaximumValue()
{
    if(!this.root){
      return 'No Node in tree';
    }
    let maxNumber = this.root.value;
    let findMax = (node) => {
      if (node.left) findMax(node.left);
      if (node.right) findMax(node.right);
      if (node.value > maxNumber) 
      {
      maxNumber = node.value; } 
    };

    findMax(this.root);
    return maxNumber;
};


breadthFirstSearch() {
  let node = this.root; 
  let queue = []; 
  let finalOrder = []; 
  queue.push(node); 
  while (queue.length) { 
    node = queue.shift(); 
    finalOrder.push(node.value); 
    if (node.left) queue.push(node.left); 
    if (node.right) queue.push(node.right); 
  }
  return finalOrder;
}

}

module.exports = BinaryTree;


