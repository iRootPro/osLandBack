const {HTTP_PORT} = require('./configServer')
const app = require('./app')

app
    .listen(HTTP_PORT, () => {
        console.log(`Http server is running on ${HTTP_PORT} port`)
    })
    .on('error', e => {
        console.error(e.message)
    })

