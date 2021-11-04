'use strict';

const LinkedList = require('../lib/LinkedList');


describe('Linked list', () => {

  it('creation of linkedList works', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('append to linkedList works', () => {

    let list = new LinkedList();

    list.append('One');
    expect(list.head.value).toEqual('One');

    list.append('Two');
    expect(list.head.value).toEqual('One');





  });


});