const relevantTeams = require('./relevantTeams')
const csvToJson = require('./cvstojson')
const filterData = require('./filterData')

const playingteams = relevantTeams('premierLeague')
const promiseData = csvToJson('EnglandPremierLeauge')

promiseData.then(function(data){
    const filtered = filterData(data, playingteams)
    console.log(filtered.homeGames)
    console.log(filtered.awayGames)
})