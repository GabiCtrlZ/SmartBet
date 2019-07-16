const relevantTeams = require('./relevantTeams')
const csvToJson = require('./cvstojson')
const filterData = require('./filterData')

const playingteams = relevantTeams('seriaA')
const promiseData = csvToJson('ItalySerieA')

promiseData.then(function(data){
    const filtered = filterData(data, playingteams)
    console.log(filtered.homeGames)
    console.log(filtered.awayGames)
    console.log(filtered.avg)
})