'''
Given an array, find sum is closest to zero. Time Complexity O(nlogn)
Input: [1,60,-10,70,-80,85]
Output:5
Solution:
1/Sort the array: [-80,-10,1,60,70,85]
2/l=0 and r=size-1
3/sum = arr[l]+arr[r]
4/if sum is positive, then right--, we are decreasing right, as already number is positive so min_sum should be combination of lesser number then existing one
5/if sum is negative, then increase left by left++
6/keep track of abs(min_sum)
7/Repeat steps 3,4,5 abd 6 while l<r
'''
