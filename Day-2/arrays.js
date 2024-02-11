/**
 * Array:
 * 
 * - An array is a collection of elements stored at contiguous memory locations.
 * - The number of elements in an array is called the size or length of the array.
 * 
 */

// arr = [1,2,3]
// console.log(typeof(arr))

// arr1 = new Array();
// console.log(typeof(arr1))

// arr = [1,2,3,4,5,6,7,8,9,23]

// console.log(arr[7])

// console.log(arr[0])
// console.log(arr[34])//no noise it is undefined
// console.log(arr[-1])//valid index starts 0

// console.log(arr[1])

/***
 * Arrays are mutable , we can modify the value
 */

// arr[1] = 5;
// console.log(arr[1])



/**
 * add the end of the array using push operation
 */
// arr  = [3,4,35,6,7,4]
// console.log(arr)

// arr.push(11)
// console.log(arr);

// arr.push(99,100,500)
// console.log(arr);


// /***
//  * ushift method is used to begining of the array
//  */
// arr.unshift(999)
// console.log(arr);

// arr.unshift(9,35,765,432)
// console.log(arr);


// //pop method used to show the last element
// let arr = [3,56,4,3,5,3,9]

// console.log(arr.pop())

// //shift
// console.log(arr.shift())
// console.log(arr);

// //concat
// let a1 = [1,2,3,8,6]
// let a2 = [6,8]

// let r = a1.concat(a2)
// console.log(r);

// //size of the array
// console.log(a1.length)


/**
 * convert array into string 
 * 
 */
// chr_arr = ['P','A','N','D','A',' ','A','s','h','i','r']

// //join
// console.log(chr_arr.join(''));
// console.log(chr_arr.join());
// console.log(chr_arr.join('$'));

// console.log(typeof chr_arr.toString());



// /**
//  * Slicinig of the array
//  */
// let nums = [3,2,4,5,7,8,3,2,4,5,6,78,5,4]

// console.log(nums.slice(2))
// console.log(nums.slice(2,7))
// console.log(nums.slice(5,-1))
// console.log(nums.slice(-9,-2))
// console.log(nums.slice(2,-1))


/***
 * Splicing ,which modifies the given array
 */
// let number = [1,2,3,4,5]
// let remove = number.splice(1,2)

// console.log(remove);
// console.log(number);


/***
 * Reverse a given array
 */
// let nums = [2,3,5,6,7,4,,7,,8]
// console.log(nums.reverse())

// let nums = [2,3,5,6,7,4,,7,,8]
// console.log(nums.indexOf(90));


/***
 * Sorting the array
 */

let nums = [2,3,5,5,6,7,4,7,8]
// nums.sort((a,b)=> a-b);
//reverse order
nums.sort((a,b)=> b-a);
console.log(nums);

