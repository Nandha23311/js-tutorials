var array = [
    {name: "nandha" , age:5},
    {name: "ajay" , age:9},
    {name: "gopi" , age:12},
    {name: "ganesh" , age:10}
]


let find = array.find( (each) =>{
    return (each.age >6 && each.age<8)
 })

 if(find != undefined ){
    // code for user exisit
 }else{
    // code for user not found
 }