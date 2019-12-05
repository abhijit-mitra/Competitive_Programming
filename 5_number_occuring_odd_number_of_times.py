def get_odd_freq_item(arr):
    res = arr[0]
    arr.pop(0)
    for elm in arr:
        res ^= elm
    print(res)


if __name__ == '__main__':
    input_arr = [1, 2, 3, 2, 3, 1, 3]
    '''output should be 3.'''
    get_odd_freq_item(input_arr)
