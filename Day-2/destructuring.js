/***
 * destructuring
 * 
 * - allows us to extract values from objects or arrays and assign them to variables.
 */

// const nums = [1,2,3]

// const [a,b,c,d] = [1,2,3]

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


/**Destructuring of an object */

const per ={
    name: "panda",
    age : 45,
    city : "bbsr"
}

const {name,age,city} = per

console.log(name)
console.log(age)
console.log(city)