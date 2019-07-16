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

const ItalySerieA = mongoose.model('ItalySerieA', dataSchema)
const EnglandPremierLeauge = mongoose.model('EnglandPremierLeauge', dataSchema)
const SpainLaLiga = mongoose.model('SpainLaLiga', dataSchema)

module.exports = {"Seria-A": ItalySerieA, "Premier-Leauge": EnglandPremierLeauge, "La-Liga": SpainLaLiga}

