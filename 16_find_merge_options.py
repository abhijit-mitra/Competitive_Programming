'''
Find minimum number of merge options to make an array palindrome
Ex:
Input:[15,4,15]
Output: 0

Input[1,4,5,1]
Output: 1

Input:[11,14,15,99]
Output: 3
Solution:
1/keep two pointers res= ,i=0 and j=n-1, iterate for i<=j
2/ if arr[i]==arr[j]: i++; j--;
3/ else if arr[i]>arr[j]:j--;arr[j]+=arr[j+1];res++
4/ else: i++; arr[i]+=arr[i-1];res++
'''


def get_merge_count(arr):
    res = 0
    i = 0
    j = len(arr)-1
    while i <= j:
        if arr[i] == arr[j]:
            i += 1
            j -= 1
        elif arr[i] > arr[j]:
            j -= 1
            arr[j] += arr[j+1]
            res += 1
        else:
            i += 1
            arr[i] += arr[i-1]
            res += 1
    print(res)


if __name__ == '__main__':
    arr = [1, 4, 5, 1]
    get_merge_count(arr)
