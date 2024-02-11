const express = require("express");
const authenticationMiddleware = require("./authenticationMiddleware");

//express
const app = express();
app.use(express.json());

//Response
app.get("/",(req,res) => {
    res.send("Day 11 Challenge Completed");
})

//authenticationMiddleware data
app.get("/amw",authenticationMiddleware,(req,res)=>{
    res.send("Protected Route");
})

//port declaration
const port = process.env.port || 7777;

//server response
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})