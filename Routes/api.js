const express = require('express')
let dataModels = require('../Mongoose/dataSchema')
const router = express.Router()
const update = require('../Functions/exep')
const calcExpectedGoals = require('../Functions/calcExpectedGoals')
const arrRusults = require('../Functions/arrResults')
const Base64 = require('../Functions/base64')
const key = require('./key')
const updateTeams = require('../Functions/updateTeams')
const downloadFunc = require('../Functions/download')

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

router.get(`/admin/up/${Base64.encode(key)}/:league`, async function (req, res) {
    const league = req.params.league
    await dataModels.updateModels()
    dataModels = require('../Mongoose/dataSchema')
    const allNameArr = await dataModels.Relevant.find({})
    if (allNameArr.some(x => x.name == league)) {
        await update(league)
        return res.send('updated successfully')
    }
    res.send('wrong input')
})

router.post(`/admin/upTeams/${Base64.encode(key)}`, function (req, res) {
    const data = req.body
    updateTeams(data.league, JSON.parse(data.teamsArr))
    return res.send('updated successfully')
})

router.get('/teams/:league', async function(req, res){
    const league = req.params.league
    const leagueStuff = await dataModels.Relevant.findOne({name: league})
    res.send(leagueStuff.relevantTeams)
})

router.post(`admin/down/${Base64.encode(key)}`, function(req, res){
    const data = req.body
    downloadFunc(data.url, data.fileName)
    res.send('Downloaded')
})

module.exports = router
