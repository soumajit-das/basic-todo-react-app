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
