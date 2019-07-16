const dataModels = require('../Mongoose/dataSchema')
const calcExpectedGoals = async function (league, homeTeam, awayTeam) {

    const allAvg = await dataModels[league].find({
        name: "allAvg"
    })

    const homeData = await dataModels[league].find({
        name: homeTeam,
        place: "Home"
    })
    const homeAvgFor = homeData.avgFor / allAvg.avgFor
    const homeAvgAgainst = homeData.avgAgainst / allAvg.avgAgainst

    const awayData = await dataModels[league].find({
        name: awayTeam,
        place: "Away"
    })
    const awayAvgFor = awayData.avgFor / allAvg.avgAgainst
    const awayAvgAgainst = awayData.avgAgainst / allAvg.avgFor

    return {
        homeExpextedGoals: homeAvgFor * awayAvgAgainst * allAvg.avgFor,
        awayExpextedGoals: awayAvgFor * homeAvgAgainst * allAvg.avgAgainst
    }
}
module.exports = calcExpectedGoals