const relevantTeams = require('./relevantTeams')
const csvToJson = require('./cvstojson')
const filterData = require('./filterData')
const dataModels = require('../Mongoose/dataSchema')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/soccarDB', {useNewUrlParser: true})


const playingteams = relevantTeams('seriaA')
const promiseData = csvToJson('ItalySerieA')

promiseData.then(function(data){
    const filtered = filterData(data, playingteams)
    console.log(filtered.homeGames)
    console.log(filtered.awayGames)
    console.log(filtered.avg)
    for (let key in filtered.homeGames){
        let teamH = new dataModels["Seria-A"](filtered.homeGames[key])
        let teamA = new dataModels["Seria-A"](filtered.awayGames[key])
        teamA.save()
        teamH.save()
    }
    let avg = new dataModels['Seria-A']({name: 'allAvg', avgFor: filtered.avg.avgHome.avgHomeFor, avgAgainst: filtered.avg.avgHome.avgHomeAgainst })
    avg.save()
})