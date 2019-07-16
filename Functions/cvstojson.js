const csvToJson = function (excelName) {
    const csvFilePath = `../ExelData/${excelName}.csv`
    const csv = require('csvtojson')
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            return jsonObj
        })
}

module.exports = csvToJson