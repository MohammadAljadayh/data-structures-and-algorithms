"use strict";

const AnimalShelter= require("../AnimalShelter");


class Animal {
    constructor(name) {
      this.name=name;
    }
  };

describe("animal shelter", () => {
  test("enqueue new dog or cat  to shelter", () => {
    let shelter = new AnimalShelter();
    let dog = new Animal("dog");
    let cat = new Animal("cat");

    shelter.enqueue(dog);
    shelter.enqueue(cat);
    expect(shelter.dog.enqueue.length).toEqual(1);
    expect(shelter.cat.enqueue.length).toEqual(1);
  });

  test('dequeue dog  from shelter',()=>{
    let shelter = new AnimalShelter();
    let dog = new Animal("dog");
    let dog2 = new Animal("dog");
 
    shelter.enqueue(dog);
    shelter.enqueue(dog2);
    expect(shelter.dog.dequeue()).toBe(dog);
  
  });

  test('dequeue cat  from shelter',()=>{
    let shelter = new AnimalShelter();
    let cat = new Animal("cat");
    let cat2 = new Animal("cat");
    shelter.enqueue(cat);
    shelter.enqueue(cat2);
    expect(shelter.cat.dequeue()).toBe(cat);  });



  test(' enqueue not cat or dog another animal like lion  ',()=>{
    let shelter = new AnimalShelter();
    let lion = new Animal("lion");
    
    expect(shelter.enqueue(lion)).toEqual('plese select just dog and cat to enter the shelter');
  });

  test(' dequeue not cat or dog another animal like lion',()=>{
    let shelter = new AnimalShelter();
    let lion = new Animal("lion");
    
    expect(shelter.dequeue(lion )).toEqual(null);
  });
});
