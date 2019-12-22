`
Maximum difference between two elements such that larger element appears after the smaller number
Given an array arr[] of integers, find out the maximum difference between any two elements such that larger element appears after the smaller number.

Examples :

Input : arr = {2, 3, 10, 6, 4, 8, 1}
Output : 8
Explanation : The maximum difference is between 10 and 2.

Input : arr = {7, 9, 5, 6, 3, 2}
Output : 2
Explanation : The maximum difference is between 9 and 7.

Method 1 (Simple)
Use two loops. In the outer loop, pick elements one by one and in the inner loop calculate the difference of the picked element with every other element in the array and compare the difference with the maximum difference calculated so far. Below is the implementation of the above approach :

Method 2 (Tricky and Efficient)
In this method, instead of taking difference of the picked element with every other element, we take the difference with the minimum element found so far. So we need to keep track of 2 things:
1) Maximum difference found so far (max_diff).
2) Minimum number visited so far (min_element).

Time Complexity : O(n)
Auxiliary Space : O(1)
`

const getMaxSum = (arr) =>{
  let size = arr.length;
  let min = arr[0];
  let max_diff = 0;
  for(let i=1;i<size;i++){
    if(arr[i]<min){
      min = arr[i];
    }
    let cur_diff = arr[i] - min;
    if(max_diff<cur_diff){
      max_diff = cur_diff;
    }
  }
  return max_diff;
}

console.log(getMaxSum([2, 3, 10, 6, 4, 8, 1]));
