const relevantTeams = function (leagueName) {
    const premierLeague = ["Man City", "Liverpool", "Chelsea", "Tottenham", "Arsenal", "Man United", "Wolves", "Everton", "Leicester", "West Ham", "Watford", "Crystal Palace", "Newcastle", "Bournemouth", "Burnley", "Southampton", "Brighton"]
    const seriaA = ["Juventus", "Napoli", "Spal", "Atalanta", "Inter", "Milan", "Roma", "Torino", "Lazio", "Sampdoria", "Bologna", "Sassuolo", "Udinese", "Parma", "Cagliari", "Fiorentina", "Genoa"]
    const laLiga = ["Barcelona", "Ath Madrid", "Real Madrid", "Valencia", "Getafe", "Sevilla", "Espanol", "Ath Bilbao", "Sociedad", "Betis", "Alaves", "Eibar", "Leganes", "Villarreal", "Levante", "Valladolid", "Celta"]
    if (leagueName === "Premier-Leauge") {
        return premierLeague
    }
    if (leagueName === "Seria-A") {
        return seriaA
    }
    if (leagueName === "La-Liga") {
        return laLiga
    }
}

module.exports = relevantTeams