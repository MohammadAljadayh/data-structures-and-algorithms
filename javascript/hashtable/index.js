'use strict';

const Hashmap=require('./lib/hashmap')

let hashmap = new Hashmap(3);
hashmap.set('mohammd', 'aljadayh');
hashmap.set('omar', 'jad');
hashmap.set('razan', 'abd');
let isContain=hashmap.contains('mohammd');
console.log(isContain);
let getHash=hashmap.get('mohammd'); 
console.log(getHash);
let getHashO=hashmap.get('omar'); 
console.log(getHashO);



