let a = [1, 2, 3, 4];

function printData() {
  setTimeout(() => {
    a.forEach((val) => {
      console.log(val);
    });
  }, 1000);
}

function pushData(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      a.push(val);
      let err = false;
      if (!err) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}
//ES8
const init = async () => {
  try {
    await pushData(7);
    printData();
  } catch (error) {
    console.log(err)
  }
};

init()
