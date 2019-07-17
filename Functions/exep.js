const csvToJson = require('./cvstojson')
const filterData = require('./filterData')
let dataModels = require('../Mongoose/dataSchema')

async function updateByLeagueName(league) {
    await dataModels.updateModels()
    dataModels = require('../Mongoose/dataSchema')
    if (league == 'Premier-Leauge' || league == 'Seria-A' || league == "La-Liga") {
        await dataModels[league].remove({})
        let playingteams = await dataModels.Relevant.findOne({name: league})
        playingteams = playingteams.relevantTeams
        const data = await csvToJson(league)

        const filtered = filterData(data, playingteams)
        for (let key in filtered.homeGames) {
            let teamH = new dataModels[league](filtered.homeGames[key])
            let teamA = new dataModels[league](filtered.awayGames[key])
            teamA.save()
            teamH.save()
        }
        let avg = new dataModels[league]({ name: 'allAvg', avgFor: filtered.avg.avgHome.avgHomeFor, avgAgainst: filtered.avg.avgHome.avgHomeAgainst })
        avg.save()
    }

}

module.exports = updateByLeagueName