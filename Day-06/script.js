const express = require('express')
const app = express()

function getHandler(req, res){
    const name = req.query.name
    const greeting = name ? `Hello, ${name}!` : `Hello, Guest!`;
    res.send(greeting)
}

app.get("/greet",getHandler)
const port = 3001
app.listen(port,()=>{
    console.log('working')
});