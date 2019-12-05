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
