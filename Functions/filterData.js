let homeGames = {}
let awayGames = {}

class HomeStats{
    constructor(name) {
        this.name = name
        this.goalsAgainst = 0
        this.goalsFor = 0
        this.rivalteams = []
    }
}

class AwayStats{
    constructor(name) {
        this.name = name
        this.goalsAgainst = 0
        this.goalsFor = 0
        this.rivalteams = []
    }
}


function initialize(playingTeams){
    for (let team of playingTeams){
        homeGames[team] = new HomeStats(team)
        awayGames[team] = new AwayStats(team)
    }
}

function starilaizeData(data, playingTeams){
    for (let game of data){
        if(playingTeams.some( x => x == game.AwayTeam) && playingTeams.some( x => x == game.HomeTeam) ){
            if(!homeGames[game.HomeTeam].rivalteams.some(x => x == game.AwayTeam )){
            homeGames[game.HomeTeam].goalsFor += parseInt(game.FTHG)
            awayGames[game.AwayTeam].goalsFor += parseInt(game.FTAG)
            homeGames[game.HomeTeam].goalsAgainst += parseInt(game.FTAG)
            awayGames[game.AwayTeam].goalsAgainst += parseInt(game.FTHG)
            homeGames[game.HomeTeam].rivalteams.push(game.AwayTeam)
            awayGames[game.AwayTeam].rivalteams.push(game.HomeTeam)
            }
        }
    }
}

function filterData(data, playingTeams){
    homeGames = {}
    awayGames = {}
    initialize(playingTeams)
    starilaizeData(data, playingTeams)
    return {homeGames, awayGames}
}

module.exports = filterData