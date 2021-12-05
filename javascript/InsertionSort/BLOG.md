# Insertion Sort

Selection Sort is a sorting algorithm that traverses the array multiple times as it slowly builds out the sorting sequence. The traversal keeps track of the minimum value and places it in the front of the array which should be incrementally sorted.

## Pseudocode

``` 
  InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```
 
```
JS CODE :  
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while ((j >= 0) && (temp < arr[j])) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

```
## Trace

> **Sample Array: [8,4,23,42,16,15]**

 # 1 :
In the first step through of the insertion sort, we evaluate if there is a smaller number in the array than what is currently present in index 0. We find this smaller number right away in index 1. The minimum value gets updated to remember this index. At the end of the evaluation, the smaller number will be swapped with the current value in index i.

> The result : [ 8, 4, 15, 42, 16, 23 ]

# 2 :
The second step through the array evaluates the remaining values in the array to see if there is a smaller value other than the current position of i. 8 is the 2nd smallest number in the array, so it “swaps” with itself. The minimum value does not change at all during the iteration of this step.

> The result : [ 4, 8, 23, 42, 16, 15 ]

# 3 :
The third step through evaluates the remaining indexes in the array, starting at position 2. Both position 4 and 5 are smaller than the value in position 2. Each time a smaller number than the current minimum is found, the variable will update to the new smallest number. it will swap with position 2.

>The result :  [ 4, 8, 15, 42, 16, 23 ]

# 4 :
The 4th step through on the array proves that 16 is the next smallest number in the array, and as a result, switches places with the 42.

>The result : [ 4, 8, 15, 16, 42, 23 ]

# 5 :
The 5th step through of the array only has one other index to evaluate. Since the last index value is larger than index 4, the two values will swap.

>The result : [ 4, 8, 15, 16, 23, 42 ]

#  6 :
On its final iteratation through the array, it will swap places with itself as it evaluates the value against itself 

>The result : [ 4, 8, 15, 16, 23, 42 ]

## Efficency : 

- Time: O(n^2)
The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times…concluding the algorithm to be n squared.
- Space: O(1)
No additional space is being created. This array is being sorted in place…keeping the space at constant O(1).

