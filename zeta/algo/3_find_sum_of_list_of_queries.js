/*
Given an array arr of integers of size n. We need to compute the sum of elements from index i to index j. The queries consisting of i and j index values will be executed multiple times.
Input : arr[] = {1, 2, 3, 4, 5}
        i = 1, j = 3
        i = 2, j = 4
Output :  9
         12         

Input : arr[] = {1, 2, 3, 4, 5}
        i = 0, j = 4 
        i = 1, j = 2 
Output : 15
          5

A Simple Solution is to compute the sum for every query.

An Efficient Solution is to precompute prefix sum. Let pre[i] stores sum of elements from arr[0] to arr[i]. To answer a query (i, j), we return pre[j] – pre[i-1].

Below is the implementation of the above approach:          

*/

function getSumByQuery(rootArr, queryArr){
    let storedSumArr = [];
    storedSumArr[0]=rootArr[0];
    for(let i=1;i<rootArr.length;i++){
        storedSumArr[i] = storedSumArr[i-1] + rootArr[i];
    }
    const result =[];
    for(let j=0; j<queryArr.length; j++){
        const [start, end] = queryArr[j];
       const sum = start>0? storedSumArr[end] - storedSumArr[start-1]: storedSumArr[end];
       result.push(sum);
    }
    return result;
}

console.log(getSumByQuery([1,2,3,4,5,6,7,8,9,10],[[0,2],[2,5]]));



