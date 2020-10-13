/*

Heap: Finding the K smallest items.


Array = [8, 3, 7, 4, 5, 0, 12]
K = 3


1- Select first 3=K items and create the Max heap tree.
    8
  3   7


2- Iterate on remainung items and check each one with the root node of the heap.
   If it is smaller than the root, then update the heap.
   If it is bigger than the root, skip it.

next item is: 4
4 is smaller than root(8), lets update the heap:

    4     ==>   7
  3   7        3  4


next item is 5:

    5
  3   4


next item is 0:

    0     ==>   4
  3   4       3   0


next item is 12:
12 is bigger than the root, so skip it.


The final heap tree looks like:
  
    4
  3   0


So the answer is [0, 3, 4]

*/
