//challenge - 1
const arr = [1, 2, 3, 4, 5];
arr.reverse();
arr.push(0);
arr.unshift(6);
console.log(arr);

// challenge - 1

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
//solution-1
const arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3);

// solution-2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);
console.log(arr4);
