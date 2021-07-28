/**
 * Given a list of numbers and a number k, return whether any 
 * two numbers from the list add up to k.
 */


const arr = [0, 1, 2, 3, 5];
const k = 7;

const findPair = (arr, k) => {
  let dict = {};
  for (let i=0; i < arr.length; i++) {
    let searched = k - arr[i];
    if (dict[searched]!= undefined && searched >= 0) {
      return [arr[i], searched];
    } else {
      dict[arr[i]] = i;
    }
  }
  return undefined;
};

console.log("Given array: "+arr)
console.log("K: "+k)
console.log(findPair(arr, k));
