/*

              (a,2)
      (b,-1)        (c,3)
(d,10)      (e,4)       (f,1)
        (g,2)

Objective: Find the maximum sum from all possible paths

- A path has one or more contiguous nodes
- No node is traversed more than once in a path
- Maximum sum: 15
- Path with maximum sum: [(10), (-1), (2), (3), (1)]
- No need to find the path, just the maximum sum

*/

/* Solution for reduced problem:
Maximum sum from all paths that originate at
root and end at a leaf
*/


/*
              (a,27)
      (b,-20)        (c,3)
(d,-5)      (e,4)       (f,1)
        (g,-2)
*/

g = {val: -2}
d = {val: -5}
e = {val: 4, left: g}
f = {val: 1}
b = {val: -20, left: d, right: e}
c = {val: 3, right: f}
a = {val: 27, left: b, right: c}
root = a

maximumSum(root);


var max_sum = root.val;

function maximumSum(node) {
  if (!node) return 0;

  console.log("Visiting: ", node)

  let leftSum = maximumSum(node.left);
  let rightSum = maximumSum(node.right);

  max_sum = Math.max(max_sum, node.val + leftSum + rightSum);
  console.log("Max sum: ", max_sum);

  if(node.left && node.right){
    return Math.max(leftSum, rightSum)+node.val;
  }

  if(node.left){
      return leftSum + node.val
  }else{
    return rightSum + node.val
  }

}
console.log(max_sum);
