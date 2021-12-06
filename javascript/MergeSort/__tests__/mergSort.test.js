const mergeSort=require('../lib/mergSort')

describe('merge sort Array test', () => {

    it('sorted from lowest to highest value', () => {
        let array = [10,2, 5, 0, 6, 4,];
        mergeSort(array);
        // console.log(array);
        expect(array).toEqual([0,2,4,5,6,10]);
    });
    it(' it can sort duplicate value in array ', () => {
        let array = [10,2, 5,5, 0, 6, 4,];
        mergeSort(array);
        expect(array).toEqual([0,2,4,5,5,6,10]);
    });
    it('it can sort negetive numbers', () => {
        let array = [10,2, -5,5, 0, 6, 4,];
        mergeSort(array);
        expect(array).toEqual([-5,0,2,4,5,6,10]);
    });
});
