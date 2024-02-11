/***
 * Global scope
 */

var name="vishwa" //here the name is global

console.log(name)

function func(){
    console.log(name)
}

func()

/***
 * Local scoper/Function scope variable
 */

function func() {
    var num = 55
    console.log(num)
}
func()
// console.log(num);

/***
 * Block scope
 */

{
    let x = 20;
    console.log(x);
}

console.log(x);