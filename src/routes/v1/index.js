const express = require('express')
const ok = require('./odnoklassniki/odnoklassniki')
const router = express.Router()

router.use('/ok', ok)
module.exports = router
