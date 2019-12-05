'''
Strictly increasing means array which is in increasing order
Input: [1,4,3]
Output: 1
There is only one subarray [1,4]

Input: [1,2,3,4]
Output: 6
There are 6 subarrays: [1,2],[2,3],[3,4],[1,2,3],[2,3,4],[1,2,3,4]

Input; [1,2,2,4]
Output: 2
There are two subarrays: [1,2],[2,4]

*** IMPORTANT LOGIC***
will give result in O(n)
1/If the array is sorted in increasing order then maximum subarray we can get is
len*(len-1)/2
2/ Initialize count=0, len = 1;
3/Traverse the whole arr, check if arr[i+1]>arr[i]--> len++, else--->
count += len*(len-1)/2, len=1
4/finally, outside of loop if len>1:count += len*(len-1)/2, len=1
'''


def get_strictly_inc_subarrays(arr):
    count = 0
    size = 1
    for i in range(len(arr)-1):
        if arr[i+1] > arr[i]:
            size += 1
        else:
            count += (size*(size-1))//2
            size = 1

    if size > 1:
        count += (size*(size-1))//2
    print(count)


if __name__ == '__main__':
    arr = [1, 2, 2, 4]
    get_strictly_inc_subarrays(arr)
