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

const arr = [3, 4, -1, 1];        // Ans = 2
const arr2 = [1, 2, 0];           // Ans = 3
const arr3 = [15, -2, 14, 21];    // Ans = 1
const arr4 = [-3, 1, -2, -1, 0];  // Ans = 2
const arr5 = [0, 0, 0];           // Ans = 1
const arr6 = [1, 2, 3, 4, 0, -1]; // Ans = 5

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

const solveOK = (arr) => {
  let sorted = arr.sort();
  let i = 0;

  while(i < sorted.length-1) {
    if(sorted[i] < 0 && sorted[i+1] > 1)
      return 1;
    if(sorted[i] >= 0) {
      if(sorted[i]+1 !== sorted[i+1])
        return sorted[i]+1;
    }
    i++;
  }
  return sorted[i]+1;
}

console.log("Test 1: " + solveOK(arr));
console.log("Test 2: " + solveOK(arr2));
console.log("Test 3: " + solveOK(arr3));
console.log("Test 4: " + solveOK(arr4));
console.log("Test 5: " + solveOK(arr5));
console.log("Test 6: " + solveOK(arr6));
