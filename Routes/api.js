const express = require('express')
const dataModels = require('../Mongoose/dataSchema')
const router = express.Router()
const update = require('../Functions/exep')
const calcExpectedGoals = require('../Functions/calcExpectedGoals')

router.get('/try/:league', function (req, res) {
    const league = req.params.league
    dataModels[league].find({}, function (err, res2) {
        res.send(res2)
    })
})

router.post('/calc', async function (req, res) {
    const data = req.body
    const result = await calcExpectedGoals(data.league, data.homeTeam, data.awayTeam)
    console.log(result)
})

router.get('/admin/:league', function (req, res) {
    update(req.params.league)
    res.send('updated successfully')
})



module.exports = router