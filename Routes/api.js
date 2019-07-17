const express = require('express')
const dataModels = require('../Mongoose/dataSchema')
const router = express.Router()
const update = require('../Functions/exep')
const calcExpectedGoals = require('../Functions/calcExpectedGoals')
const arrRusults = require('../Functions/arrResults')
const Base64 = require('../Functions/base64')

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

router.get('/admin/:league', function (req, res) {
    update(req.params.league)
    res.send('updated successfully')
})

router.get('/admintry', function(req, res){
    const key = req.query.key 
    if (key == Base64.encode('Kazoon')){
        return res.sendFile(path.join(__dirname + '/..'+'/Admin/index.html'))
    }
    return res.send('sorry')
})


module.exports = router
