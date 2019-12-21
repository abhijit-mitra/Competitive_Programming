'''
Find out the length of bitonic subarr in the given arr. Bitonic subarr means array should increase to some point after that it should decrease.
Ex: Input:[12,4,78,90,45,23]
Output:5, as from 4 array starts increasing and from 90 it starts decreasing

1/Construct a temp array inc[],from left to right such that inc[i] contains length of the increasing sub arr.
for arr=[12,4,78,90,45,23], inc will be [1,1,2,3,1,1]
2/Construct a temp array dec[],from right to left such that dec[i] contains length of the increasing sub arr.
for arr=[12,4,78,90,45,23], inc will be [2,1,1,3,2,1]
3/Once we have the inc[] and dec[], all we need to do find max of (inc[i]+dec[i]-1)
For [12,4,78,90,45,23], the max value of (inc[i]+dec[i]-1) is 5 for i=3
'''


def get_bitonic_arr(arr):
    size = len(arr)
    inc = [0] * size
    dec = [0] * size
    inc_count = 0
    dec_count = 0
    max_subarr_size = 0

    for i in range(size):
        j = (size-1) - i

        inc_count += 1
        inc[i] = inc_count

        dec_count += 1
        dec[j] = dec_count

        if (i < (size-1)) and not arr[i] < arr[i+1]:
            inc_count = 0

        if (i < (size-1)) and not arr[j] < arr[j-1]:
            dec_count = 0

    print(inc)
    print(dec)

    for i in range(len(inc)):
        if max_subarr_size < (inc[i]+dec[i]-1):
            max_subarr_size = inc[i]+dec[i]-1

    print(max_subarr_size)


if __name__ == '__main__':
    arr_1 = [12, 4, 78, 90, 45, 23]
    '''
    output: [4,78,90,45,23]
    '''
    arr_2 = [20, 4, 1, 2, 3, 4, 2, 10]
    '''
    output: [1,2,3,4,2]
    '''
    get_bitonic_arr(arr_1)
