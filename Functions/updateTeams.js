const dataModels = require('../Mongoose/dataSchema')

function updateTeamsInLeague(league, teamsArr) {
    console.log(league)
    console.log(teamsArr)
    console.log(dataModels.Relevant)
    if (league == 'Premier-Leauge' || league == 'Seria-A' || league == "La-Liga") {
        const rel = new dataModels.Relevant({name: league, relevantTeams: teamsArr})
        rel.save()
    }

}

module.exports = updateTeamsInLeague