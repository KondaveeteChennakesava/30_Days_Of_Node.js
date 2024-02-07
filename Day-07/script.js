const { time } = require('console')
const express = require('express')
const app = express()
const port = 6969

const logRequest = (req, res, next) => {
    const timestamp = new Date().toISOString()
    const method = req.method
    console.log(`${timestamp} - ${method} request received`)
    next()
}
app.use(logRequest)
app.get('/', (req, res) => {
    res.send('I am Mr_KK')
})
app.listen(port, () => {
    console.log(`console is working in port ${port}`)
})