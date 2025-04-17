/*
Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
For example, given:
const nums = [2, 7, 11, 15];
const target = 9;
The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.
Requirements:
    • Implement the solution in JavaScript.
    • The solution should have a time complexity better than O(n^2).
    • Include proper error handling for edge cases.
*/


function getIndices(arr, target) {
  if(!Array.isArray(arr)) {
    throw new Error('Argument "arr" should be an array');
  }

  if(typeof target !== 'number') {
    throw new Error('Argument "target" should be a number');
  }

  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] !== 'number') {
      throw new Error(`Element at index ${i} is not a number`);
    }

    const compliment = target - arr[i];
    if (obj[compliment] !== undefined) {
      return [i, obj[compliment]];
    } else {
      obj[arr[i]] = i;
    }
  }
}

console.log(getIndices([2, 7, 11, 15], 9));
