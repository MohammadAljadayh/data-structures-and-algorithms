# Quick Sort

Quick sort follows Divide and Conquer algorithm. It is dividing elements in to smaller parts based on some condition and performing the sort operations on those divided smaller parts. Hence, it works well for large datasets. So, here are the steps how Quick sort works in simple words.



## Pseudocode

``` 
// ALGORITHM QuickSort(arr, left, right)
//     if left < right
//         // Partition the array by setting the position of the pivot value
//         DEFINE position <-- Partition(arr, left, right)
//         // Sort the left
//         QuickSort(arr, left, position - 1)
//         // Sort the right
//         QuickSort(arr, position + 1, right)

// ALGORITHM Partition(arr, left, right)
//     // set a pivot value as a point of reference
//     DEFINE pivot <-- arr[right]
//     // create a variable to track the largest index of numbers lower than the defined pivot
//     DEFINE low <-- left - 1
//     for i <- left to right do
//         if arr[i] <= pivot
//             low++
//             Swap(arr, i, low)

//      // place the value of the pivot location in the middle.
//      // all numbers smaller than the pivot are on the left, larger on the right.
//      Swap(arr, right, low + 1)
//     // return the pivot index point
//      return low + 1

// ALGORITHM Swap(arr, i, low)
//     DEFINE temp;
//     temp <-- arr[i]
//     arr[i] <-- arr[low]
//     arr[low] <-- temp


```
 
```
JS CODE :  
function quickSort(arr, left, right) {
    if (left < right) {
        let position = partition(arr, left, right);
        quickSort(arr, left, position - 1);
        quickSort(arr, position + 1, right);
    }
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let low = left - 1;
    for (let i = left; i < right; i++) {
        if (arr[i] <= pivot) {
            low++;
            swap(arr, i, low);
        }
    }
    swap(arr, right, (low + 1));
    return (low + 1);
}

function swap(arr, i, low) {
    let temp;
    temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;

}

```
## Trace
> example Array [5,3,7,6,2,9].


> STEP 1: Determine pivot as middle element. So, 7 is the pivot element.

> STEP 2: Start left and right pointers as first and last elements of the array respectively. So, left pointer is pointing to 5 at index 0 and right pointer is pointing to 9 at index 5.

> STEP 3: Compare element at the left pointer with the pivot element. Since, 5 < 6 shift left pointer to the right to index 1.

> STEP 4: Now, still 3 <6 so shift left pointer to one more index to the right. So now 7 > 6 stop incrementing the left pointer and now left pointer is at index 2.

> STEP 5: Now, compare value at the right pointer with the pivot element. Since 9 > 6 move the right pointer to the left. Now as 2 < 6 stop moving the right pointer.

> STEP 6: Swap both values present at left and right pointers with each other.

> STEP 7: Move both pointers one more step.

> STEP 8: Since 6 = 6, move pointers to one more step and stop as left pointer crosses the right pointer and return the index of the left pointer

## Efficency : 

- Time: O (n log n) 

