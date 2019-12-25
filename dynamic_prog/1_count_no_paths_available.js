`
Write a programe to count number of paths available for completing steps.

Ex:
1/ total steps available, N=1, output: {[0,1]}, mean only 1 path is available;
2/ total steps available, N=2, output: {[0,1, 2],[0,2]}, mean only 2 path is available;
2/ total steps available, N=3, output: {[0,1, 2, 3],[0,2, 3],[0,1,3]}, mean only 3 path is available;
4/ total steps available, N=4, output: {[0,1, 2, 3, 4],[0, 2, 3, 4],[0,1,3, 4],[0,1,2,4],[0,2,4]}, mean only 3 path is available;
`

function getNumWays(n){
  if(n===0 || n===1){
    return 1;
  }
  const arr = [];
  arr[0] = 1;
  arr[1] = 1;
  for(let i=2;i<=n;i++){
    arr[i] = arr[i-1] + arr [i-2];
  }
  console.log(arr);
  return arr[n];
}

console.log(getNumWays(6));
