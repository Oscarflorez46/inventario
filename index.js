const express = require("express");
const holaRoutes = require ("./routes/helloRoutes")


const app = express();

PORT = 3000;

app.set("port",PORT);

app.get("/hola",(req,res)=>{
    res.send("Hola mundo")
})

//Routes
app.use("/api/hola", holaRoutes)
app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}`)
})
