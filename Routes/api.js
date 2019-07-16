const express = require('express')
const dataModel = require('../Mongoose/dataSchema')
const router = express.Router()


router.get('/try/:league' , function(req , res){
    const league = req.params.league
    dataModel[league].find({} , function(err ,res2){
        res.send(res2)
    })
})

router.get('/admin/:league', function(req, res){
    
})


module.exports = router