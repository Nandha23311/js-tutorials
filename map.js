var array =[{name: "nandha",age: 21} , {name: "ajay",age: 22}],
var xx= array.map((each)=>{
    if(each.age == 21){
        return each.name
    }
})
console.log("xx ", xx)
