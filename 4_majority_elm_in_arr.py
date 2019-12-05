'''Majority elm in array means elm should exist in array more than the half of the length of the array.
1/create a empty dict, and store frequency of each elm and check which is having more frequency.
2/check max_freq is more than the len(arr)/2 or not. If its true then print the elm.
'''
import math


def get_majority_elm(arr):
    my_hash = {}
    max_freq = 0
    max_freq_elm = None
    for elm in arr:
        if my_hash.get(elm):
            my_hash[elm] += 1
        else:
            my_hash[elm] = 1

    for key, value in my_hash.items():
        if value > max_freq:
            max_freq = value
            max_freq_elm = key

    if max_freq > math.floor(len(arr)/2):
        print(max_freq_elm)
    else:
        print(None)


if __name__ == '__main__':
    input_arr = [3, 3, 4, 2, 4, 4, 2, 4, 4]
    '''output should be 4.'''
    get_majority_elm(input_arr)
