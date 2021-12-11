const Hashmap=require('../lib/hashmap')

describe('hashtable test should', () => {

    let hashmap = new Hashmap(3);
    hashmap.set('mohammd', 'aljadayh');
    hashmap.set('omar', 'jad');
    hashmap.set('razan', 'abd');


    it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
        expect(hashmap.contains('mohammd')).toBe(true);
    });

    it('Retrieving based on a key returns the value stored', () => {
        expect(hashmap.get('mohammd')).toStrictEqual(['mohammd', 'aljadayh']);
        expect(hashmap.get('lujain')).toStrictEqual('no values at this key');
    });

    it('Successfully returns null for a key that does not exist in the hashtable', () => {
        expect(hashmap.contains('abd')).toBe(true);
    });

    it('Successfully handle a collision within the hashtable', () => {
        expect(hashmap.storage[1].head.val).toStrictEqual(["omar", "jad"]);
  

    });

    it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        expect(hashmap.get('omar')).toStrictEqual(['omar', 'jad']);
    });

    it('Successfully hash a key to an in-range value', () => {
        expect(hashmap.size).toBe(3);
    });

});