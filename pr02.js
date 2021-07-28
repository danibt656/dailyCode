/**
 *  == PROBLEM 02 ==
 *  28 / july / 2021
 *
 * Given an array of integers, return a new array such that 
 * each element at index i of the new array is the product of 
 * all the numbers in the original array except the one at i.
 */

const solve = (arr) => {
  let ans = [];
  let prod = 1;
  let isZero = false;
  let numZeros = 0;
  
  /* We calculate the product of all items, except for zeroes */
  for (let i=0; i < arr.length; i++) {
    if (arr[i] === 0) {
      isZero = true;    // first zero found
      numZeros++;       // count number of zeroes
    }else{
      prod *= arr[i];
    }
  }

  /* We then populate the answer array, handling the zero cases */
  for (let i=0; i < arr.length; i++) {
    if (numZeros > 1) {
      ans[i] = 0;     // if more than 1 zero, ans will be all zeroes
    }else {           // Has 1 or none zeroes
      if (!isZero) {   // No zeroes, we have normal case
        ans[i] = prod / arr[i];
      }else {
        if (arr[i]) 
          ans[i] = 0;
        else 
          ans[i] = prod;
      }
    }
    
  }

  return ans;
};

const solveWithoutDivision = (arr) => {
  let ans = [];
  let prod = 1;

  for (let i=0; i < arr.length; i++) {
    ans[i] = prod;
    prod *= arr[i];
  }
  prod = 1;
  for (let i=arr.length - 1; i>0; i--) {
    ans[i] *= prod;
    prod *= arr[i];
  }
  
  return ans;
};



console.log(solveWithoutDivision ([3, 2, 1]));    // ans must be [2, 3, 6]
console.log(solveWithoutDivision ([0, 2, 1]));    // ans must be [2, 0, 0]
console.log(solveWithoutDivision ([0, 2, 0]));    // ans must be [0, 0, 0]
