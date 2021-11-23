
'use strict';
const Node=require('../lib/Node');
const Tree=require('../lib/Tree');
const fizzBuzzTree=require('../fizbuzkarytree')

describe('Max Value Of Tree', () => {
    const KaryTree = new Tree();
    KaryTree.addNode(1);
    KaryTree.addNode(3);
    KaryTree.addNode(7);
    KaryTree.addNode(5);
    KaryTree.addNode(15);
    KaryTree.addNode(4);
    KaryTree.addNode(9);
    
    console.log(fizzBuzzTree(KaryTree));

    it('check Root', () => {
    expect(fizzBuzzTree(KaryTree).root.value).toEqual(1);
    });
    it('check Fizz', () => {
     expect(fizzBuzzTree(KaryTree).children[0].value).toEqual('Fizz');
        });
    it('check Buzz', () => {
    expect(fizzBuzzTree(KaryTree).children[2].value).toEqual('Buzz');
            });
    it('check FizzBuzz', () => {
     expect(fizzBuzzTree(KaryTree).children[3].value).toEqual('FizzBuzz');
                });


});