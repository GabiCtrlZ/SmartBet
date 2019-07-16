const relevantTeams = require('./relevantTeams')
const csvToJson = require('./cvstojson')
const filterData = require('./filterData')
const dataModels = require('../Mongoose/dataSchema')

function updateByLeagueName(league) {

    if (league == 'Premier-Leauge' || league == 'Seria-A' || league == "La-Liga") {
        const playingteams = relevantTeams(league)
        const promiseData = csvToJson(league)

        promiseData.then(function (data) {
            const filtered = filterData(data, playingteams)
            for (let key in filtered.homeGames) {
                let teamH = new dataModels[league](filtered.homeGames[key])
                let teamA = new dataModels[league](filtered.awayGames[key])
                teamA.save()
                teamH.save()
            }
            let avg = new dataModels[league]({ name: 'allAvg', avgFor: filtered.avg.avgHome.avgHomeFor, avgAgainst: filtered.avg.avgHome.avgHomeAgainst })
            avg.save()
        })
    }

}

module.exports = updateByLeagueName