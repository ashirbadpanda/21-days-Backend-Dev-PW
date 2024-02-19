/***
 * ForEach method
 */

players = ["Sachin", "Virat", "Rohit", "Dhoni"]

players.forEach((player)=>console.log(player))


/**
 * map -> Creation of new transformed array
 */

arr = [1,2,3,4,5,6];

cube_arr = arr.map(num => num**3)
console.log(cube_arr);
// cube_arr = arr.forEach(num=>console.log(arr));


/***
 * filter
 */

// let arr1 = [5,6,7,8]

// let even_arr = arr1.filter((num => num%2==0))
// log