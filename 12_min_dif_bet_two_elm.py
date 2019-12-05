'''
Find out the minimum difference between two elements in given array.
Ex: Input arr: [1,5,3,19,18,25]
outpu: 1
Time Complexity: nlogn
Solution:
1/ Sort the array. [1,3,5,18,19,25] -->nlogn
2/ set diff = infinity
3/ Iterate over array check if (arr[i+1] - arr[i])<diff: diff = arr[i+1]-arr[i]
'''
import math


def get_min_diff(arr):
    diff = math.inf
    arr.sort()
    for i in range(len(arr)-1):
        res = arr[i+1]-arr[i]
        if res < diff:
            diff = res
    print(diff)


if __name__ == '__main__':
    arr = [1, 3, 5, 18, 19, 25]
    get_min_diff(arr)
