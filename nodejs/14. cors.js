const express = require('express')

const app = express();

const cors = require('cors')
app.use(cors())

app.get('/demo', (req, res) => {
    const body = req.body;
    res.send({
        status: 0,
        msg: 'success',
        data: body
    })
})

app.post('/demo', (req, res) => {
    const body = req.body;
    res.send({
        status: 0,
        msg: 'success',
        data: body
    })
})

app.listen('8000', () => {
    console.log('running')
})

