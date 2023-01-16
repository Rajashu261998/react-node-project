const express = require("express")
require("dotenv").config()
const app = express()

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("App is working")
})


app.listen(process.env.port)