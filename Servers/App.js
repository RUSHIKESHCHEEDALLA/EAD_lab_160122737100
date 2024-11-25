const express = require('express')
const mongoose = require('mongoose')
const alienRouter = require('./Routes/aliens')


const url = 'mongodb://127.0.0.1:27017/CVR';
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})


app.use(express.json())


app.use('/alien',alienRouter)
app.listen(6000, () =>
{
console.log('Server started')
})