"use strict";

let LinkedList = require("../lib/LinkedList");

describe("LinkedList", () => {
  it("the initial constructor()", () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
    expect(newList.tail).toBeNull();
    expect(newList.size).toEqual(0);
  });

  // it("insert one node ", () => {
  //   let newList = new LinkedList();
  //   newList.append(1);
  //   expect(newList.head.value).toEqual(1);
  //   expect(newList.head.next).toBeNull();
  // });
  // it("insert  many node", () => {
  //   let newList = new LinkedList();
  //   newList.append(2);
  //   newList.append(3);
  //   expect(newList.head.value).toEqual(2);
  //   expect(newList.head.next.value).toEqual(3);
  // });

  it('Where k is greater than the length of the linked list', () => {
    let newList = new LinkedList();
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    newList.append(5);
    expect(newList.kthFromEnd(10)).toEqual('Exception');
  });

  it('Where k and the length of the list are the same', () => {
    let newList = new LinkedList();
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    newList.append(5);
    expect(newList.kthFromEnd(5)).toEqual('Exception');
  });

  it('Where k is not a positive integer', () => {
    let newList = new LinkedList();
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    newList.append(5);
    expect(newList.kthFromEnd(-2)).toEqual('K is Not Positive number');
});
it('Where the linked list is of a size 1', () => {
  let newList = new LinkedList();
  newList.append(1);
  expect(newList.kthFromEnd(0)).toEqual(1);
  expect(newList.kthFromEnd(1)).toEqual('Exception');
});

it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
  let newList = new LinkedList();
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    newList.append(5);
    newList.append(6);
    newList.append(7);
  expect(newList.kthFromEnd(3)).toEqual('Happy Path');
});
})