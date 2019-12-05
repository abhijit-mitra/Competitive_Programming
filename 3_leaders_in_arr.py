'''Leader in arr mean the elm which does not have any number greater than that on right side'''
'''Trick is: Scan all the elements from rigth to left in array and keep track of maximum till now. When maximum chnages its value print it'''


def get_leaders_in_arr(arr):
    cur_max = 0
    for index in range(len(arr)-1, -1, -1):
        if arr[index] > cur_max:
            cur_max = arr[index]
            print(cur_max)


if __name__ == '__main__':
    input_arr = [16, 17, 4, 3, 5, 2]
    '''output should be 17,5 and 2.'''
    get_leaders_in_arr(input_arr)
