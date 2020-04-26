`
Move all zeros at the end of the array.
Given an array of random numbers, push all zeros at the end.

Input: [1,9.8,4,0,0,2,7,0,6,0]
Output: [1,9,8,4,2,7,6,0,0,0,0]
`


const get_new_arr = (arr) =>{
  let j=0;
  for(let i=0;i<arr.length;i++){
      if (arr[i]){
        arr[j] = arr[i];
        j++;
      }
  }

  while(j<arr.length){
    arr[j] = 0;
    j++;
  }

  console.log(arr);

}

//get_new_arr([1,9,8,4,0,0,2,7,0,6,0]);

// with two pointers

function get_resultant_err(arr){
  let i=0;
  let j=0;
  let size = arr.length
  while(i<size && j<size){
    if(arr[i]){
      i++;
      j=i;
    }else{
      j++;
      if(arr[j]){
        arr[i] = arr[j];
        arr[j] = 0;
      }
    }
  };
  console.log(arr);
  return arr;
}

get_resultant_err([1,9,8,4,0,0,2,7,0,6,0]);
