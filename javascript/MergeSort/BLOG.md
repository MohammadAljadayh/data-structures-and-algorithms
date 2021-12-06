# Merge Sort

Merge sort is one of the most popular sorting algorithms today and it uses the concept of divide and conquer to sort a list of elements. Meaning, it will divide the bigger problem into smaller problems and then solve each of the small problems in order to solve the bigger problem that we started out with.



## Pseudocode

``` 
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

```
 
```
JS CODE :  
function mergeSort(arr) {
    let n = arr.length;
    if (n > 1) {
        let mid = Math.floor(n / 2);
        let left = arr.slice(0, mid);
        let right = arr.splice(mid);
        mergeSort(left);
        mergeSort(right);
        merge(left, right, arr);
    }
    return arr;
}

function merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i += 1;
        } else {
            arr[k] = right[j];
            j += 1;
        }
        k += 1;
    }
    while (i < left.length || j < right.length) {
        if (i === left.length) {
            arr.push(right[j]);
            j++;
        } else {
            arr.push(left[i]);
            i++;
        }
    }
    return arr;
}

}

```
## Trace
> example array [10, -1, 2, 5, 0, 6, 4, -5]

![](https://miro.medium.com/max/700/1*Uh6e_EkHIPTv5ZucvTfYvQ.png) 

## 1 : 
Notice that at each level we divide the array into two halves until we get bunch of single element arrays. This is the divide portion of the divide and conquer method. Then, we start merging and sorting the smaller arrays in a series of steps which is the conquer portion of divide and conquer
## 2 : 
-   // No need to sort the array if the array only has one element or empty
-   // In order to divide the array in half, we need to figure out the middle
 -  // This is where we will be dividing the array into left and right
 -  // Using recursion to combine the left and right
## 3 : 
After we set up the base case, we can go ahead to identify the middle index and split the array into left and right just as we had in the diagram above. Then we need to merge the left side and the right side
## 4 : 
we need to make sure we are sorting all the elements in the left and the right. The way we will do this is using a while loop. In addition, we will need to make sure we keep track of which element from each left and right we are comparing by using the variables leftIndex and rightIndex
## 5 : 
Within the while loop, we compare element in the left at leftIndex and element in the right at rightIndex. We can push the smaller of the two into our result array and move our cursor (leftIndex/rightIndex) to make sure we aren’t duplicating any comparisons 

## 6 : 

Finally 
- set remaining entries in arr to remaining values in right
 else
-  set remaining entries in arr to remaining values in left

## Efficency : 

- Time: O (n log n) 

