'use strict';

const AnimalShelter =require('./AnimalShelter');

class Animal {
    constructor(name) {
      this.name=name;
    }
  };

let shelter= new AnimalShelter();
let dog1=new Animal('dog');
let dog2=new Animal('dog');
let cat1=new Animal('cat');
let cat2=new Animal('cat');

shelter.enqueue(dog1);
shelter.enqueue(dog2);
shelter.enqueue(cat1);
shelter.enqueue(cat2);
shelter.dequeue(cat1);
shelter.dequeue(dog1);

console.log(shelter);













