const insertionSort=require('../lib/insertionSort')

describe('insertion Sort test ', () => {

    it(' sorted from lowest to highest value', () => {
        let array = [8, 4, 23, 42, 16, 15];
        insertionSort(array);
        expect(array).toEqual([4, 8, 15, 16, 23, 42]);
    });
    
    it(' it can sort duplicate value in array ', () => {
        let array = [8, 4, 23, 42, 16, 16,5,5];
        insertionSort(array);
        expect(array).toEqual([4,5,5, 8, 16,16, 23, 42]);
    });

    it('it can sort negetive numbers', () => {
        let array = [ 4,23,42,-5, 16, 15];
        insertionSort(array);
        expect(array).toEqual([-5, 4, 15, 16, 23, 42]);
    });

});