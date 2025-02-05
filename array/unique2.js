const x = [
  { id: "124", name: "qqq" },
  { id: "589", name: "www" },
  { id: "45", name: "eee" },
  { id: "567", name: "rrr" },
];
const y = [
  { id: "124", name: "qqq" },
  { id: "45", name: "eee" }
];

function unique(a, b) {
  let bigger;
  let small;

  if (a.length > b.length) {
    bigger = a;
    small = b;
  } else {
    bigger = b;
    small = a;
  }
  for (let i = 0; i < small.length; i++) {
    for (let j = 0; j < bigger.length; j++) {
      if (bigger[j].id === small[i].id) {
        bigger.splice(j, 1);
      }
    }
  }

  console.log("bigger", bigger);
}
unique(x, y);
