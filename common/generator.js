
//There are three methods mainly associated with generators. 

//next(): It returns the value of yield.
//return(): It returns the value and then terminates the generator function.
//throw(): It throws an error and then ends the generator function.

function* display() {
    var num = 1;
    while (num < 5)
    yield num++;
 }
 var myGenerator = display();
 console.log(myGenerator.next())
 console.log(myGenerator.next())


 