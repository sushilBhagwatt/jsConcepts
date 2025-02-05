const xArr = [
    { id: "124", name: "qqq" },
    { id: "589", name: "www" },
    { id: "45", name: "eee" },
    { id: "567", name: "rrr" },
];
const yArr = [
    { id: "124", name: "qqq" },
    { id: "45", name: "eee" }
];

function common() {
    let cArr = []

    for (el of xArr) {
        if (JSON.stringify(yArr).includes(JSON.stringify(el))) {
            cArr.push(el)
        }
    }
    console.log(cArr)


}
//common()


const arr1 =[1,2,3,4,5,6,7]
const arr2 =[1,5,77]
function common2() {
    let cArr = []

    for (el of arr1) {
        if(arr2.includes(el)){
            cArr.push(el)
        }
    }
    console.log(cArr)


}
common2()