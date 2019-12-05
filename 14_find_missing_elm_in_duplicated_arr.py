'''
Findout missing element from duplicated array.
Input: arr1 = [1,4,5,7,9]
        arr2=[4,5,7,9]
Output: 1
Solution:
1/get total sum of arr_1 and arr_2, then subtract arr_1 - arr_2, will give the Output. O(n)
2/Do xor operation on arr_1, res ^=arr_1[i], then do xor operation on arr_2 like res ^=arr_2[i]. O(n)
3/Do binary search, check
            {
                if arr_1[mid]==arr_2[mid]:
                    //then missing elm is on right side
                    left = mid
                else:
                    //then missing elm is on left side
                    right = mid
            }
'''
