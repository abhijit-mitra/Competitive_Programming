'''
Is pythagorean triplet exist in the given array.
Pythagorean triplet means: a^2 + b^2 = c^2. a,b,c could be any elemnt in array.
for array = [3,1,4,5,6], one combination is present i.e: 3^2 + 4^2 = 5^2
Optimum solution is having time complexity of n^2.
**Trick**
1/Sort the given array. [1,3,4,5,6]
2/Iterate and mutate all elemenst to square of its own value.
    [1,9,16,25,36]
3/ Set three pointers:
    [1,9,16,25,36]
     |       |  |
     l       r  i
4/ if arr[l]+arr[r]==arr[i]:return True else: arr[l]+arr[r]<arr[i]?l++:r--
'''


def is_pythagorean_triplet_exist(arr):
    arr.sort()
    arr = [elm*elm for elm in arr]
    for i in range(len(arr)-1, 1, -1):
        left = 0
        right = i-1
        while left < right:
            res = arr[left]+arr[right]
            if res == arr[i]:
                return True
            if res < arr[i]:
                left += 1
            else:
                right -= 1
    return False


if __name__ == '__main__':
    arr = [3, 1, 4, 5, 6]
    result = is_pythagorean_triplet_exist(arr)
    print(result)
