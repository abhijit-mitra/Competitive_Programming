'''Replace every elm from rigth greatest elements'''
'''Trick is: Scan from right and store max_value. check if max_value<cur_elm then make max_value= cur_elm'''


def get_arr(arr):
    size = len(arr)
    cur_max = arr[size-1]
    arr[size-1] = -1
    for index in range(size-2, -1, -1):
        temp = arr[index]
        arr[index] = cur_max
        if temp > cur_max:
            cur_max = temp
    print(arr)


if __name__ == '__main__':
    input_arr = [16, 17, 4, 3, 5, 2]
    '''output   [17, 5, 5, 5, 2, -1]'''
    get_arr(input_arr)
