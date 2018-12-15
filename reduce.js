var cost = [1,2,3]
let count  = cost.reduce((total, value) =>{
    console.log("total ", total)
    console.log("value ", value)
    return total + value


})
console.log(count);