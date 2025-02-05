let a = [1, 2, 3, 4];

function printData() {
  setTimeout(() => {
    a.forEach((val) => {
      console.log(val);
    });
  }, 1000);
}

function pushData(val, callback) {
  setTimeout(() => {
    a.push(val);
    callback();
  }, 2000);
}

pushData(5, printData);
