var array =[{name: "nandha",age: 20, online:true} , {name: "ajay",age: 22, online:true}, {name: "gopi",age: 16, online:false} ,{name: "ganesh",age: 16, online:true} ]

var xx= array.filter((each)=>{
    return each.age>=18 && each.online==true
})

console.log("xx ", xx)
