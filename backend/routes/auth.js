const express = require('express')
const router = express.Router()

/* Controller */
const { register, login } = require('../controllers/auth')
/* Middleware */


router.post('/register', register)
router.post('/login', login)



module.exports = router