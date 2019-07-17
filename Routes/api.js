const express = require('express')
const dataModels = require('../Mongoose/dataSchema')
const router = express.Router()
const update = require('../Functions/exep')
const calcExpectedGoals = require('../Functions/calcExpectedGoals')
const arrRusults = require('../Functions/arrResults')
const Base64 = require('../Functions/base64')
const key = require('./key')
const updateTeams = require('../Functions/updateTeams')

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
    const arr = arrRusults(result)
    res.send(arr)
})

router.get(`/admin/up/${Base64.encode(key)}/:league`, function (req, res) {
    const league = req.params.league
    if (league == 'Premier-Leauge' || league == 'Seria-A' || league == "La-Liga"){
    update(league)
    return res.send('updated successfully')
    }
    res.send('wrong input')
})

router.post(`/admin/upTeams/${Base64.encode(key)}`, function (req, res) {
    const data = req.body
    if (data.league == 'Premier-Leauge' || data.league == 'Seria-A' || data.league == "La-Liga"){
        updateTeams(data.league, JSON.parse(data.teamsArr))
    return res.send('updated successfully')
    }
    res.send('wrong input')
})


module.exports = router
