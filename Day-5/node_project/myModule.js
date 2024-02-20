exports.add = (a,b)=>{
    return a+b
}

console.log(typeof add)

// module.exports = add

exports.prod = (a,b)=>{
    return a*b
}

// module.exports = {
//     add:add ,
//     prod : prod
// }

// exports.sub = (a,b)=>{
//     return a-b
// }