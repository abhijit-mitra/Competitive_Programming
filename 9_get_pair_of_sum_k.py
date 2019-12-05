'''
Find out the pairs in a array for given sum k
**Trick**
1/ Iterate over the array and store elm in a SET.
2/ check if k - arr[i] exist in SET then print (k-arr[i],arr[i])
'''


def get_pairs_of_sum_k(arr, k):
    store = set()
    for elm in arr:
        if k-elm in store:
            print('[{},{}]'.format(k-elm, elm))
        store.add(elm)


if __name__ == '__main__':
    arr = [1, 3, 2, 2, 3, 1]
    k = 4
    '''output should be 6'''
    get_pairs_of_sum_k(arr, k)
