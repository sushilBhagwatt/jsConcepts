const array = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
// console.log(array.reduce(reducer)); //10
//accumulator is previous value
// array.reduce((accumulator, currentValue, currentIndex, array) => {
//   console.log("accumulator", accumulator);
//   console.log("currentValue", currentValue);
//   console.log("currentIndex", currentIndex);
//   console.log("array", array);
//   return accumulator + currentValue;
// }, 0);

const Person = [
  { name: "sushil", age: 40 },
  { name: "Rushil", age: 42 },
  { name: "kushil", age: 50 },
];

const oldestAge = Person.reduce((p, c) => {
  if (c.age > p) {
    return c.age;
  }
  return p;
},0);


console.log(oldestAge);
