function loggingMiddleware(req, res, next){
    const timestamp = new Date().toISOString();
    console.log(`
    Timestamp: ${timestamp}
    Method: ${req.method}
    URL: ${req.originalUrl}
    Headers: ${JSON.stringify(req.headers, null, 2)}
    Body: ${JSON.stringify(req.body, null, 2)}
    `);
    next();
}

const express = require('express');
const app = express();
app.use(loggingMiddleware);

app.get('/api/data',(req,res) => {
    res.json({message: 'Day-15 challenge completed'});
})

const port = 6363;
app.listen(port, () => {
    console.log(`Server is connected to port ${port}`)
})