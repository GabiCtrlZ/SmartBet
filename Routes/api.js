const express = require('express')
const dataModels = require('../Mongoose/dataSchema')
const router = express.Router()
const update = require('../Functions/exep')

router.get('/try/:league' , function(req , res){
    const league = req.params.league
    dataModels[league].find({} , function(err ,res2){
        res.send(res2)
    })
})

router.get('/admin/:league', function(req, res){
    update(req.params.league)
    res.end()
})


module.exports = router