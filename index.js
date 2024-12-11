const express = require("express");

const app = express();

PORT = 3000;

app.set("port",PORT);

app.get("/hola",(req,res)=>{
    res.send("Hola mundo")
})
app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}`)
})
