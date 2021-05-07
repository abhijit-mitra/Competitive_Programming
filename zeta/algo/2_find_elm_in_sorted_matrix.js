const sorted_matix =[[1,5,9],[14,20,21],[30,34,43]];

function binarySearch2(arr, elm){
    let left=0;
    let right=arr.length-1;
    let mid;
    while(left<=right){
        mid=Math.floor((left+right)/2);
        const value = arr[mid];
        if(value===elm){
            return mid
        }
        if(elm>value){
            left = mid+1;   
        }else{
            right= mid-1;
        }
    }
    return -1
}

function binarySearch(sorted_matix, elm){
    let left=0;
    let right=sorted_matix.length-1;
    let mid;
    while(left<=right){
        mid=Math.floor((left+right)/2);
        const curArr = sorted_matix[mid];
        const size = curArr.length;
        if(elm>=curArr[0] && elm<=curArr[size-1]){
            return [mid, binarySearch2(curArr, elm)];
        }
        else if(elm>curArr[size-1]){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return -1;
}

console.log(binarySearch(sorted_matix, 20));