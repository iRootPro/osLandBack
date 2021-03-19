const axios = require('axios')

const {OK_APP_ID, OK_REDIRECT_URI, OK_SEK_KEY} = require('./../../configServer')

const instance = axios.create({
    baseURL: 'https://api.ok.ru/oauth',
    withCredentials: true
})

module.exports = {
    getAuthLink() {
        return `https://connect.ok.ru/oauth/authorize?client_id=${OK_APP_ID}&scope=VALUABLE_ACCESS&response_type=code&redirect_uri=${OK_REDIRECT_URI}`
    },
    getAccessToken(code) {
        return instance.post(`/token.do?code=${code}&client_id=${OK_APP_ID}&client_secret=${OK_SEK_KEY}&redirect_uri=${OK_REDIRECT_URI}&grant_type=authorization_code`)
    }
}
