const express = require('express')
const router = express.Router()
const login = require('../controllers/login')

router.get('/login',login.loginPage)

router.post('/login/bbva_token',login.bbvaToken)

module.exports = router