'use strict';


const Queue=require('./lib/queue');


class AnimalShelter{
    constructor(){
        this.dog=new Queue();
        this.cat=new Queue();     
    }

    enqueue(animal){
        if(animal.name==='dog'){
            this.dog.enqueue(animal);
            return this.dog;
        }else if(animal.name==='cat'){
            this.cat.enqueue(animal);
            return this.cat;
        }else{
            return 'plese select just dog and cat to enter the shelter'; 
        }
    }

    dequeue(animal){
        if(animal.name==='dog'){
            this.dog.dequeue(animal);
        }else if(animal.name==='cat'){
            this.cat.dequeue(animal);
        }else{
            return null;
        }
    }
}


module.exports=AnimalShelter