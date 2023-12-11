const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.json([{
        id:1,
        name: "Niku satya"
    },{
        id:2,
        name: "Niki"
    },{
        id:3,
        name: "Pipi"
    },{
        id:1,
        name: "Pinku"
    },])
})

app.listen(5000, ()=>{
    console.log("App is running on 5000")
})