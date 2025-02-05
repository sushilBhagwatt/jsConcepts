const a = ["Pune", "Delhi", "Pune", "Delhi", "Mumbai", "Pune"];
var counts = {};
//for (let i = 0; i < a.length; i++) {
for (i in a) {
  if (counts[a[i]]) {
    counts[a[i]] = counts[a[i]] + 1;
  } else {
    counts[a[i]] = 1;
  }
  console.log(counts);
}
console.log(counts);

// var b = counts.filter((a) => a === 1);
// console.log(b);
for (key in counts) {
  if (counts[key] !== 1) {
    console.log("the " + key + " is repeated and occurance is " + counts[key]);
  }

  // if(counts[key]===1){
  //   delete counts[key]
  // }
}
console.log(counts);
