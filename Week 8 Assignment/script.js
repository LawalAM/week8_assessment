//A function that finds the maximum value in an array

function findMaxValue(arr){
  if (arr.length === 0){
    return undefined; //returns undefined for an empty array
  }
  let max = arr[0];
  for(let i = 1; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

let num = [3, 5, 7, 4, 10, 44, 6, 76];
let result = findMaxValue(num);
console.log(result);