const { log } = require("console")
const  express = require("express")


const app = express() //cretate server

 app.post('/notes',(req,res)=>{
    console.log(req.body);
    
 })



app.listen(3000,()=>{
    console.log("server is running is port 3000");
    
})