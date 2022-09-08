const exp = require('express')
const rout = exp.Router()
const a = require('../model/model')
rout.get('/', async(req, res) => {
    try {
        const x = await a.find() //for fetching the data
        res.json(x)
    } catch (err) {
        res.send("Error" + err)
    }
})
rout.post('/', async(req, res) => {
    const d = new a({
        name: req.body.name,
        tech: req.body.tech,
        section: req.body.section
    })
    try {
        const x1 = await d.save()
        res.json(x1)
    } catch (err) {
        res.send("Error" + err)
    }
})
module.exports = rout