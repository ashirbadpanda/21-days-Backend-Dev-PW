// const user = { 
//     name : "Ashirbad",
//     age : 44,
//     city : "Bhubaneswar",
//     profession : "Hacker"
// };

// //Accessing the data
// console.log(user.name);
// console.log(user['name']);
// console.log(user);

// /**
//  * Adding data to the object
//  */

// user.country = "India"
// user['continent'] = "Asia"
// console.log(user);

// /***
//  * Deleting object keys and object itself
//  */
// delete user.country;
// console.log(user)


let person = {
    name : "Panda",
    age : 99,
    address : {
        city : "London",
        state : "Bangkok",
        country : "Europe"
    }
}

for(let key in person){
    // console.log(key)
    console.log(key, " => ", person[key])
}

console.log(Object.keys(person));

console.log(Object.values(person));

//get both keys and values
console.log(Object.entries(person));

/***
 * Cloning an object using assign
 * 
 */

const new_person = Object.assign({},person)
console.log(new_person);

const new_person_1 = Object.assign({}, person, {role:"Developer"})
console.log(new_person_1);