const a = [
  [1, 2, 6],
  [3, 4, 5],
  [6, 7, 8],
];
function sumOfDiagonals(arr) {
  let sum1 = 0;
  let sum2 = 0;
  // this is also working
  // for (let i = 0; i < arr.length; i++) {
  //   sum1 += arr[i][i];
  //   sum2 += arr.reverse()[i][i];
  // }

  for (i in arr) {
    sum1 += arr[i][i];
  }
  for (i in arr.reverse()) {
    sum2 += arr[i][i];
  }
  console.log(sum1);
  console.log(sum2);
}
sumOfDiagonals(a);
