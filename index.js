// https://stackoverflow.com/questions/46523321/mongoerror-connect-econnrefused-127-0-0-127017
const exp = require('express');
const m = require('mongoose');
const url = "mongodb://localhost/FSD_lab_043"
const cors=require('cors')
const bodyparser=require('body-parser')
m.connect(url, { useNewUrlParser: true }) //To avoid warnings we have used useNewUrlParser:true
const app = exp();
const con = m.connection
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
con.on('open', ()=> {
    console.log("Welcome")
})
app.use(exp.json())
const r = require('./controller/route')
app.use('/student', r)
app.listen(9000, () => {
    console.log("Server connected")
})