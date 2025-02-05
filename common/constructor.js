// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
const myUncle = new Person("Johnny", "walker", 45, "black");
console.log(myFather);
console.log(myUncle);
