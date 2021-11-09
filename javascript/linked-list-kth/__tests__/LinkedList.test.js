"use strict";

let LinkedList = require("../lib/LinkedList");

describe("LinkedList", () => {
  it("the initial constructor()", () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
    expect(newList.tail).toBeNull();
    expect(newList.length).toEqual(0);
  });


  it('Where k is greater than the length of the linked list', () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    newList.append(5);
    expect(newList.kthFromEnd(10)).toEqual('erorr k is greater than the length of the linked list');
  });

  it('Where k and the length of the list are the same', () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    newList.append(5);
    expect(newList.kthFromEnd(4)).toEqual(1);
    expect(newList.kthFromEnd(5)).toEqual('erorr k and the length of the list are the same');
  });

  it('erorr k is not a positive integer', () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    newList.append(5);
    expect(newList.kthFromEnd(-2)).toEqual('erorr k is not a positive integer');
});
it('Where the linked list is of a size 1', () => {
  let newList = new LinkedList();
  newList.insert(1);
  expect(newList.kthFromEnd(0)).toEqual(1);
});

it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
  let newList = new LinkedList();
    newList.insert(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    newList.append(5);
    newList.append(6);
    newList.append(7);

  expect(newList.kthFromEnd(1)).toEqual(6);
  expect(newList.kthFromEnd(2)).toEqual(5);
  expect(newList.kthFromEnd(3)).toEqual(4);
  expect(newList.kthFromEnd(4)).toEqual(3);
  expect(newList.kthFromEnd(5)).toEqual(2);
  expect(newList.kthFromEnd(6)).toEqual(1);
 

});
})