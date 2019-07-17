const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
    name: String,
    place: String,
    goalsAgainst: Number,
    goalsFor: Number,
    rivalteams: [String],
    avgFor: Number,
    avgAgainst: Number
})

const relevantTeamsSchema = new Schema({
    name: String,
    relevantTeams: [String]
})

const ItalySerieA = mongoose.model('ItalySerieA', dataSchema)
const EnglandPremierLeauge = mongoose.model('EnglandPremierLeauge', dataSchema)
const SpainLaLiga = mongoose.model('SpainLaLiga', dataSchema)
const RelevantTeams = mongoose.model('RelevantTeams', relevantTeamsSchema)

module.exports = {"Seria-A": ItalySerieA, "Premier-Leauge": EnglandPremierLeauge, "La-Liga": SpainLaLiga, "Relevant": RelevantTeams}

