const https = require('https')

const server = https.createServer((req,res)=>{
    if(req.url == '/hello'){
        res.end('Hello World')
    }else{
        res.end("You are trying to hit a wrong url")
    }
})

server.listen(8000, () =>{
    console.log("Server is started")
})