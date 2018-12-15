var NokiaPhone = [{name: "quality test", status: true }, {name: "quantity test", status: false}]
let count  = NokiaPhone.every((each) =>{
    return each.status
})
console.log(count);