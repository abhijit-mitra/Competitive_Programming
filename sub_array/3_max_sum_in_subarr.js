`
Find out max sum in sub array
`

const getMaxSum = (arr) =>{
  let max_sofar = -Infinity;
  let max_end_here = 0;
  let i=0
  while(i<arr.length){
    max_end_here = max_end_here + arr[i];
    max_end_here = Math.max(0,max_end_here);
    max_sofar = Math.max(max_sofar, max_end_here);
    i++;
  }
  return max_sofar;
}

const arr1 = [-1,3,4,5,-2];
const arr2 = [-2, -3, 4, -1, -2, 1, 5, -3]

console.log(getMaxSum(arr1), getMaxSum(arr2));
