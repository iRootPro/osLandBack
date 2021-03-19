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

router.get('/getAccessTokenOk/:code', async (req, res) => {
    const {code} = req.params
    try {
        const response = await okAuth.getAccessToken(code)
        if (response.data.access_token) {
            return res.status(200).json({token: response.data.access_token})
        }
        if (response.data.error) {
            return res.status(200).json({error: response.data.error})
        }
    } catch (e) {
        console.error('Error get access token from server', e.message)
    }


})

module.exports = router
