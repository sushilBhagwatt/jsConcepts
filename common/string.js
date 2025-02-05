let username = "Sushil kumar singh";

function dublicateChar(y) {
  let unique = "";
  let dublicate = "";
  let x = y.toLowerCase();
  for (let i = 0; i < x.length; i++) {
    if (!unique.includes(x.charAt(i))) {
      if (x.charAt(i) !== " ") {
        unique += x.charAt(i);
      }
    } else {
      if (!dublicate.includes(x.charAt(i))) {
        dublicate += x.charAt(i);
      }
    }
  }
  console.log("unique", unique);
  console.log("dublicate", dublicate);
}

dublicateChar(username);
