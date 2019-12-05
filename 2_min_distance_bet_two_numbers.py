'''
1/create two pointer i and j and initialize to null.
2/i and j are to store index of x and y.
3/iterate over the array and scan for x and y. if you get x then store the index
to i and if you get y then store index in j.
4/check difference--> abs(i-j), if diff is less than min_dist then replace
min_dist with cur_diff
5/ At the end come out of the loop and print min_dist
'''


def get_min_distance(input_arr, x, y):
    i = None
    j = None
    index = 0
    min_dist = len(input_arr)
    for elm in input_arr:
        if elm == x:
            i = index
        elif elm == y:
            j = index
        if i and j and (min_dist > abs(i-j-1)):
            min_dist = abs(i-j)
        index += 1
    print(min_dist)


if __name__ == '__main__':
    # input_arr = [2, 5, 3, 5, 4, 4, 2, 3]; x=3; y=2 '''output 1'''
    input_arr = [3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3]
    x = 3
    y = 6
    '''output 4'''
    get_min_distance(input_arr, x, y)
