const download = require('download-file')
const path = require('path')
const del = require('del')
async function downloadFunc(url, filename) {
    await del(path.join(__dirname, "/..", "/ExelData/", `${filename}.csv`))
    
    const options = {
        directory: path.join(__dirname, "/..", "/ExelData"),
        filename: `${filename}.csv`
    }

    download(url, options, function (err) {
        if (err) throw err
    })
}

module.exports = downloadFunc
