const dataModels = require('../Mongoose/dataSchema')
const calcExpectedGoals = async function (league, homeTeam, awayTeam) {
    const homeData = await dataModels[league].find({
        name: homeTeam,
        place: "Home"
    })
    const avgFor = homeData.avgFor
    const avgAgainst = homeData.avgAgainst

    const awayData = await dataModels[league].find({
        name: awayTeam,
        place: "Away"
    })
    // const avgFor = homeData.avgFor
    // const avgAgainst = homeData.avgAgainst
}