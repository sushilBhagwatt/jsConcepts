let str = "sushil kumar"
function reverse(str) {
let newStr=""
    for (let i = str.length; i >= 0; i--) {
        newStr= newStr.concat(str.charAt(i))
    }
    console.log(newStr)
}
reverse(str)