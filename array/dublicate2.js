const x = [
  { id: "124", name: "qqq" },
  { id: "589", name: "www" },
  { id: "45", name: "eee" },
  { id: "567", name: "rrr" },
];
const y = [
  { id: "124", name: "qqq" },
  { id: "45", name: "eee" },
  { id: "46", name: "eef" },
];

const z = x.concat(y);

console.log(z);
let dublicate = [];
//this fuction can remove any dublicate
for (let i = 0; i < z.length; i++) {
  for (let x = i + 1; x < z.length; x++) {
    if (z[i].id === z[x].id) {
      if (!dublicate.includes(x)) {
        dublicate.push(z[x]);
      }
    }
  }
}
let ids = [];


for (let i = 0; i < dublicate.length; i++) {
  for (let x = i + 1; x < dublicate.length; x++) {
    if (dublicate[i].id === dublicate[x].id) {
      if (!ids.includes(x)) {
        ids.push(x);
      }
    }
  }
}

for (let i = ids.length - 1; i >= 0; i--) {
  dublicate.splice(ids[i], 1);
}

console.log(dublicate);
