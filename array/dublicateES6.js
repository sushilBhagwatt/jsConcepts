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
var newarr = [];
var dublicate = [];
for (ele of arr) {
  if (!JSON.stringify(newarr).includes(JSON.stringify(ele))) {
    newarr.push(ele);
  } else {
    if (!JSON.stringify(dublicate).includes(JSON.stringify(ele))) {
      dublicate.push(ele);
    }
  }
}
console.log(newarr);
console.log(dublicate);
