const {OK_APP_ID, OK_REDIRECT_URI} = require('./../../configServer')

module.exports = {
    getAuthLink() {
        return `https://connect.ok.ru/oauth/authorize?client_id=${OK_APP_ID}&scope=VALUABLE_ACCESS&response_type=code&redirect_uri=${OK_REDIRECT_URI}`
    }
}
