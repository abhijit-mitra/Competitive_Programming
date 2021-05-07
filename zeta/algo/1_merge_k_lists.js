//Merge K sorted lists, in sorted order

var sortedLists =[[1,4,5],[1,3,4],[2,6]];


const getMergedList=(a,b)=>{
  const newList=[];
  const a_size = a.length;
  const b_size = b.length;
  let i=0;
  let j=0;
  while(i<a_size && j<b_size){
    const x = a[i];
    const y = b[j];
    if(x<y){
      newList.push(x);
      i++;
    }else{
      newList.push(y);
      j++;
    }
  }
  const mergedSize = a_size + b_size;
  const leftArr = i>j? b:a;
  let smallerIndex =  i>j? j:i;
  for(let k= newList.length; k<mergedSize; k++, smallerIndex++){
    newList.push(leftArr[smallerIndex]);
  }
  return newList;

}

const getMergedKLists = (lists)=>{
  const size = lists.length;
  if(!size){
    return null
  };
  let i=0;
  while(lists.length>1){
    const a = lists.shift();
    const b = lists.shift();
    const mergedList = getMergedList(a,b);
    lists.push(mergedList);
  }
  return lists[0];
}

console.log(getMergedKLists(sortedLists)); // [1, 1, 2, 3, 4, 4, 5, 6]
