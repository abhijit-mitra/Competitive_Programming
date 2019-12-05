'''Trick:
1/get total sum of elements using (n*(n+1))/2, as 1 number is missing so we will have to modifie the formula to ((n+1)*(n+2)/2) ---> total_sum
2/get sum of elements present in array.--->arr_sum
3/Subtract arr_sum from total_sum, you will get missing elm
'''


def get_missing_num(arr):
    size = len(arr)
    total_sum = ((size+1)*(size+2))/2
    arr_sum = 0
    for elm in arr:
        arr_sum += elm
    print(total_sum - arr_sum)


def get_missing_num_xor(arr):
    total_xor_res = 0
    arr_xor_res = 0
    for elm in range(1, len(arr)+2):
        total_xor_res ^= elm

    for elm in arr:
        arr_xor_res ^= elm

    print(total_xor_res ^ arr_xor_res)


if __name__ == '__main__':
    input_arr = [1, 2, 4, 6, 3, 7, 8]
    '''output should be 5, as 5 is missing'''
    get_missing_num_xor(input_arr)
