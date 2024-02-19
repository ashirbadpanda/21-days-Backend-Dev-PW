//callback is nothing but it is a function which is passed as an argument to another files.

function greet(name, callback){
    const greeting = "Hello " + name
    callback(greeting)
}

function displayGreeting(message){
    console.log(message);
}

greet("panda",displayGreeting)


/***
 * Callback hell | pyramid of doom
 */

getUser(function(user){
    getPost(user.id, function(post){
        displayUserInfoAndPost(user, post,function){
            console.log("User info and posts successfully displayed")
        }
    })
})