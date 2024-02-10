const exp = require('constants')
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

function staticFileServer(req, res) {
    res.sendFile(path.resolve('./test-cases/index.html'))
}

app.get('/',staticFileServer)

app.listen(6969, () => {
    console.log('server is working')
})