const dataModels = require('../Mongoose/dataSchema')

function updateTeamsInLeague(league, teamsArr) {
        const rel = new dataModels.Relevant({name: league, relevantTeams: teamsArr})
        rel.save()
}

module.exports = updateTeamsInLeague