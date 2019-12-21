/*
Count minimum steps to get the given desired array. Following are the mentioned operations you can use
1/ Incremental Operation: You can increment value by 1 of only one 1 element at a time .
2/ Doubling opertaion: You can double the value all the elements in 1 step.

Test Cases;
Input: [2,4] Output: 4
steps: [1,0],[1,1],[2,2],[2,4] so min 4 steps needed to get desired array from [0,0]

Input: [2,1] Output: 3
steps: [1,0],[1,1],[2,1]

Technique:
1/Take the target array first, initialize result with 0.
2/ if all are even divide all elements by 2 and inc result by 1.
3/ Find all odd elements, make them even by reducing 1 and for every reduction inc result by 1.
4/ Finally we will get all zeros in target array.
*/

const arr1 = [16,16,16];
const arr2 = [2,4];
const arr3 = [2,1];

const getMinStepsCount = (arr) =>{
  const size = arr.length;
  let steps = 0;
  let new_arr = [...arr];

  while(new_arr.find((elm)=>(elm>0))){
    let execute = true;
    for(let i=0;i<size;i++){
      if(!new_arr[i]){
        continue;
      }
      if(new_arr[i]%2==0){
        new_arr[i] = new_arr[i]/2;
          if(execute){
            steps++;
            execute = false;
          }
      }else{
        new_arr[i] = new_arr[i] -1;
        steps++;
      }
    }
  }
  console.log(steps);
}

getMinStepsCount(arr1);
getMinStepsCount(arr2);
getMinStepsCount(arr3);
