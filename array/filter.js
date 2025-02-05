let employee = [
    { firstName: "Ram", lastName: "singh", age: 26 },
    { firstName: "Shyam", lastName: "kumar", age: 30 },
    { firstName: "Bharat", lastName: "khurana", age: 40 },
    { firstName: "Geeta", lastName: "garg", age: 26 },
  ];
  
  // PROBLEM: FIND OUT EMPLOYEE WHOSE AGE IS BELOW 30 AND PRINT FIRST NAME AND LAST NAME
  
  //[ 'Ram singh', 'Geeta garg' ]
  
  function filterData(x) {
    let b = [];
    for (let i = 0; i < x.length; i++) {
      if (x[i].age < 30) {
        b.push(x[i].firstName + " " + x[i].lastName);
      }
    }
    console.log(b);
  }
  
  let x = employee;
  let y = [
    ...x
      .filter((item) => item.age < 30)
      .map((val) => val.firstName + " " + val.lastName),
  ];
  
  console.log(y);
  filterData(employee);