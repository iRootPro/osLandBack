const express = require('express')
const router = express.Router()
const okAuth = require('./../../../auth/ok/index')

router.get('/callback', async (req, res) => {
    console.log('Odnoklassniki callback body:', req.body)
    return res.status(200).json({message: 'Callback'})
})
router.get('/authLink', (req, res) => {
    return res.status(200).json({'link': okAuth.getAuthLink()})
})
module.exports = router
