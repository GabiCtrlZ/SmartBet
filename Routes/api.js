const express = require('express')
const request = require('request')
const router = express.Router()


router.get('/try/:league' , function(req , res){
    const league = req.params.league
    league.find({} , function(err ,res2){
        res.send(res2)
    })
})

module.exports = router