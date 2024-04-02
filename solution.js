
let arr = [5, 1, true, [1, 2, [1, 2], { a: 3 }], { a: 1 }];
function findSum(arr) {
  let sumOf = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true || arr[i] === false) sumOf += 0;
    else if (arr[i] instanceof Array) sumOf += findSum(arr[i]);
    else if (arr[i] instanceof Object) sumOf += findSumObject(arr[i]);
    else sumOf += arr[i];
  }
  return sumOf;
}
function findSumObject(obj) {
  let sumOf = 0;
  for (const key in obj) {
    if (obj[key] instanceof Array) {
      sumOf += findSum(obj[key]);
    } else if (obj[key] instanceof Object) {
      sumOf += findSumObject(obj[key]);
    } else sumOf += obj[key];
  }
  return sumOf;
}
console.log(findSum(arr));