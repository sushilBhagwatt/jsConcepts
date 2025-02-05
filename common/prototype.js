//Prototype property is basically an object (also known as Prototype object), 
//where we can attach methods and properties in a prototype object,
//which enables all the other objects to inherit these methods and properties.


// function constructor
function Person(name, job, yearOfBirth){   
    this.name= name;
    this.job= job;
    this.yearOfBirth= yearOfBirth;
}
Person.prototype.nationality = "English";
Person.prototype.calculateAge= function(){
    console.log('The current age is: '+(2023- this.yearOfBirth));
}
console.log(Person.prototype);