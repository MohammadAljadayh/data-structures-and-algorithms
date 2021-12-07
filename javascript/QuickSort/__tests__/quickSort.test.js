const quickSort =require('../lib/quickSort')

describe('quick Sort sort Array test', () => {

    it('sorted from lowest to highest value', () => {
        let array = [10,2, 5, 0, 6, 4,];
        let left = 0;
        let right = array.length - 1;
        quickSort(array, left, right);
        expect(array).toEqual([0,2,4,5,6,10]);
    });
    it(' it can sort duplicate value in array ', () => {
        let array = [10,2, 5,5, 0, 6, 4,];
        let left = 0;
        let right = array.length - 1;
        quickSort(array, left, right);
        expect(array).toEqual([0,2,4,5,5,6,10]);
    });
    it('it can sort negetive numbers', () => {
        let array = [10,2, -5,5, 0, 6, 4,];
        let left = 0;
        let right = array.length - 1;
        quickSort(array, left, right);
        expect(array).toEqual([-5,0,2,4,5,6,10]);
    });
});
