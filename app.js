const { log } = require("console")
const  express = require("express")


const app = express() //cretate server

app.get('/home',(req,res)=>{
    req.send("welcome to home page")
})



app.listen(3000,()=>{
    console.log("server is running is port 3000");
    
})