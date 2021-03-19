require('dotenv').config();

module.exports = {
    HTTP_PORT: process.env.HTTP_PORT || '',
    OK_APP_ID: process.env.OK_APP_ID || '',
    OK_PUB_KEY: process.env.OK_PUB_KEY || '',
    OK_SEK_KEY: process.env.OK_SEK_KEY || '',
    OK_LINK_APP: process.env.OK_LINK_APP || '',
    OK_REDIRECT_URI: process.env.OK_REDIRECT_URI || ''
}
