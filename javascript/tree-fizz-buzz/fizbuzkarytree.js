'use strict';

function fizzBuzzTree(tree) {
  if (!tree.root)
  {
    return 'no value in tree';
  }
  //First Check Root Value 
  if (tree.root.value % 3 === 0 && tree.root.value % 5 === 0) {
    tree.root.value = 'FizzBuzz';
  } else if (tree.root.value % 3 === 0) {
    tree.root.value = 'Fizz';
  } else if (tree.root.value % 5 === 0) {
    tree.root.value = 'Buzz';
  } else {
    tree.root.value = tree.root.value;
  }

  // Check the other vlaue in tree 
  for (let i = 0; i < tree.children.length;i++) {
    if (tree.children[i].value % 3 === 0 && tree.children[i].value % 5 === 0) {
      tree.children[i].value = 'FizzBuzz';
    } else if (tree.children[i].value % 3 === 0) {
      tree.children[i].value = 'Fizz';
    } else if (tree.children[i].value % 5 === 0) {
      tree.children[i].value = 'Buzz';
    } else {
      tree.children[i].value = tree.children[i].value;
    }

  }
  return tree;
}

module.exports=fizzBuzzTree;




