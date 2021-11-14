"use strict";

let LinkedList = require("../lib/LinkedList");

describe("LinkedList", () => {
  it("the initial constructor()", () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
    expect(newList.tail).toBeNull();
    expect(newList.size).toEqual(0);
  });

  it("insert one node ", () => {
    let newList = new LinkedList();
    newList.append(1);
    expect(newList.head.value).toEqual(1);
    expect(newList.head.next).toBeNull();
  });
  it("insert  many node", () => {
    let newList = new LinkedList();
    newList.append(2);
    newList.append(3);
    expect(newList.head.value).toEqual(2);
    expect(newList.head.next.value).toEqual(3);
  });

  it("insertBefor   node", () => {
    let newList = new LinkedList();
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.insertBefore(2, 5);
    expect(newList.head.value).toEqual(1);
    expect(newList.head.next.value).toEqual(5);
  });


})