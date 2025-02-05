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

function findDublicate() {
    let newarr = [];
    let dub = []
    for (el of arr) {
        console.log(el);
        if (!JSON.stringify(newarr).includes(JSON.stringify(el))) {
            newarr.push(el);
        } else (
            dub.push(el)

        )
    }
    console.log(newarr);
    console.log(dub);
}

//findDublicate();


let arr2 = [1, 2, 3, 3, 4, 4, 5, 6]

function dublicate() {

    let unq = []
    let dub = []
    for (num of arr2) {
        if (!unq.includes(num)) {
            unq.push(num)
        }
        else {
            dub.push(num)

        }
    }
    console.log(dub)
}

//dublicate()



function findDublicateCharacter() {
    let name = "sushil kumar Singh K"
    let x = name.split(" ").join("").toUpperCase()
    let unq = []
    let dub = []
    for (char of [...x]) {
        if (!unq.includes(char)) {
            unq.push(char)
        } else {
            if (!dub.includes(char)) {
                dub.push(char)
            }
        }
    }
    console.log(dub)

}

findDublicateCharacter()




