'''
Find duplicates with time Complexity O(n) and space Complexity O(1)
Input: [1,2,3,1,3,6,6]
Output: 1,3,6
Solution:
Traverse the list from i=0 to n-1
{
    if arr[abs(arr[i])]>=0: //if postive
        then make it negative
        arr[abs(arr[i])] = -arr[abs(arr[i])]
    else:
        print(arr[i]) // is the repeated element
}
'''


def get_duplicates(arr):
    for i in range(len(arr)):
        try:
            if arr[abs(arr[i])] >= 0:
                arr[abs(arr[i])] = -arr[abs(arr[i])]
            else:
                print(arr[i])
        except IndexError:
            continue


if __name__ == '__main__':
    arr = [1, 2, 3, 1, 3, 6, 6]
    get_duplicates(arr)
