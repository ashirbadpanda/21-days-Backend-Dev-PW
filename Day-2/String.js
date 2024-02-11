/***
 * String :
 * 
 * -String is the sequential of character
 */

let name = 'Vishwa'

let city = 'Singapor'

console.log(name,city)
console.log(typeof(name))

/***
 * Accesing the character based on their index
 */

console.log(name[0],name[11]);

/**
 * String is immutable character
 */
name[2] ="M"
console.log(name[2]);

/***
 * finding the length of the string
 */

console.log(name.length)

let first_name = "Vishwa"
let last_name = " Mohan"
//join the two string using concurrent method
let full_name = first_name.concat(last_name)
console.log(full_name);

/**
 * Convert that into upper case
 */

console.log(full_name.toUpperCase())

/**
 * slicing
 */

console.log(full_name.slice(3));
console.log(full_name.slice(2,5));
console.log(full_name.slice(-5));
console.log(full_name.slice(-5,-1));

console.log(name.indexOf('i'))


//trim 
let word = "        Ashirbad "
console.log(word.trim());

//split 
name ="Ashirbad Panda Software Engineer"
console.log(name.split("Software"));
console.log(name.split(""));
console.log(name.split("Ashirbad Panda Software Engineer"));
console.log(name.split(" "));
