var numArray = [1,2,3,4,5]
var numArray1= [2,3,4,6]
var scope = 10
let total,index;
numArray.forEach((each)=>{
    total = scope - each
        index = numArray1.indexOf(total)
        if(index!=-1)
        console.log("success ",total)

})
