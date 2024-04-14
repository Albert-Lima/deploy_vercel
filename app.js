const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.send("deploy funcionou")
})


app.listen(8081, ()=>{
    console.log("servidor rodando na porta 8081")
})