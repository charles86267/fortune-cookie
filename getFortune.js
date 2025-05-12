const fortunes = require('./fortunes.json')

function getFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length)
    const randomMssg = fortunes[randomIndex]
    return randomMssg
}

module.exports = getFortune
