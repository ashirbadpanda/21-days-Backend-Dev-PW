/***
 * Define a function
 */

function letsLearn(){
    console.log("Welcome to my galaxy");
}

letsLearn() //call the funtion


/***
 * i want to get the sum of two number
 */
function sum(a,b){
    return a+b;
}
let total = sum(5,7);
console.log(total)




//how to reach the argument of the function 
function func(){
    console.log(arguments)
}
func(1,3,4,5,6,7,8,9)
