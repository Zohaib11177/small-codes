const express = require("express")
const app = express()
const connectdb = require("./config/db")
const PORT = 5000

app.use(express.json())


app.get("/",(req,res)=>{

    res.send("hello world")
})

app.use("/auth",require("./router/auth"))

connectdb()

app.listen(PORT ,()=>{
    console.log("server is running")
})