const download = require('download-file')

function downloadFunc(url, filename) {

    const options = {
        directory: '../ExelData',
        filename: `${filename}.csv`
    }

    download(url, options, function (err) {
        if (err) throw err
        console.log("meow")
    })
}

module.exports = downloadFunc
