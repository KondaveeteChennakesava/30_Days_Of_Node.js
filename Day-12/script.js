const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');

// Rate Limiting MiddleWare
const limiter  = rateLimit({
    windowMs: 60*1000, // 1 minute
    // After completion of Three requests the requests limit will be reached and displays the messaage
    max: 10, 
    message: "Too many requests from this IP, please Try again Later",
    statusCode: 429
});

// Applying Rate Limiting MiddleWare to Requests
app.use(limiter);

// Route Handler
app.get("/",(req,res)=>{
    res.send("Day-12 Completed");
})

// port Declaration
const port = process.env.port || 7777;
app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})