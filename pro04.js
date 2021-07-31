/**
 *  == PROBLEM 04 ==
 *  30 / july / 2021
 *
 * Given an array of integers, find the first missing positive integer 
 * in linear time and constant space. In other words, find the lowest 
 * positive integer that does not exist in the array. The array can 
 * contain duplicates and negative numbers as well.
 *
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 */

const arr = [3, 4, -1, 1];
const arr2 = [1, 2, 0];
const arr3 = [15, -2, 14, 21];

/* Linear time, but linear space, because hash grows as arr grows */
const solve = (arr) => {
  let hash = {}

  for(let i = 0; i < arr.length; i++) {
    hash[arr[i]] = i;
  }

  let x = 1;
  let found = false;
  while (!found) {
    if (hash[x] != undefined) {
      x++;
    }else {
      found = true;
    }
  }

  return x;
};

console.log(solve(arr));
console.log(solve(arr2));
console.log(solve(arr3));
