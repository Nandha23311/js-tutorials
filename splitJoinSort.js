var  name ="nandha"
var check = "ndhaan"

var splitted = name.split("")
var sorted = splitted.sort()
var joined = sorted.join("")
console.log("joined ",joined)

var splitted1 = check.split("")
var sorted1 = splitted.sort()
var joined1 = sorted.join("")
console.log("joined ",joined1)

if(joined == joined1){
    console.log("same")
}