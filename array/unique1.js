

const arr = [
  { id: "589", name: "www" },
  { id: "589", name: "www" },
  { id: "124", name: "qqq" },
  { id: "589", name: "www" },
  { id: "45", name: "eee" },
  { id: "567", name: "rrr" },
  { id: "124", name: "qqq" },
  { id: "45", name: "eee" },
  { id: "45", name: "eee" },
  { id: "45", name: "eee" },
];

let ids = [];
//this fuction can remove any dublicate
for (let i = 0; i < arr.length; i++) {
  for (let x = i + 1; x < arr.length; x++) {
    if (arr[i].id === arr[x].id) {
      if (!ids.includes(x)) {
        ids.push(x);
      }
    }
  }
}

for (let i = ids.length - 1; i >= 0; i--) {
  arr.splice(ids[i], 1);
}
console.log(arr);


