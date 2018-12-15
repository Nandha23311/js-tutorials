var cost = [1,2,3]
let count  = cost.reduceRight((total, value) =>{
    console.log("total ", total)
    console.log("value ", value)
    return total + value


})
console.log(count);