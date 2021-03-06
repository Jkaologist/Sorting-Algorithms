function merge(arr1, arr2) {
  let longerArr = arr1.length > arr2.length ? arr1 : arr2;

  let mergedArr = [];
  for (let i = 0; i < longerArr.length; i ++) {
    if (arr1[i] > arr2[i]) {
      mergedArr.push(arr1[i]);
    } mergedArr.push(arr2[i]);
  }
  return mergedArr;
}

function mergeSort() {

}


let arr1 = [1,3,4,5];
let arr2 = [2,4,6,8];
merge(arr1,arr2) // [1,2,3,4,4,5,6,8]

arr1 // [1,3,4,5];
arr2 // [2,4,6,8];

let arr3 = [-2,-1,0,4,5,6];
let arr4 = [-3,-2,-1,2,3,5,7,8];

merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

let arr5 = [3,4,5]
let arr6 = [1,2]

merge(arr5,arr6) // [1,2,3,4,5]

module.exports = { merge, mergeSort};