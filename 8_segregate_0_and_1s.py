'''
From given array segregate 0 on left side and 1 on right side.
input arr:[0,1,0,1,1]
output arr:[0,0,1,1,1]
Expected time complexity: O(n)
Solution:
1/Declare two pointers: right and left
2/left=0, right= size-1
3/while left<right: if not arr[left]: left++ else: if arr[right]:right-- else: swap(arr[left],arr[right])
'''


def segregate_arr(arr):
    left = 0
    right = len(arr)-1
    while left < right:
        if not arr[left]:
            left += 1
        else:
            if arr[right]:
                right -= 1
            else:
                arr[left] = 0
                arr[right] = 1
                left += 1
                right -=1
    return arr


if __name__ == '__main__':
    arr = [0, 1, 0, 0, 0, 0, 1, 1]
    res = segregate_arr(arr)
    print(res)
