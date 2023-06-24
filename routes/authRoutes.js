const express = require('express')
const { registerController } = require('../controllers/authcontroller')

const router = express.Router()

// routes
router.post('/register', registerController)
module.exports = router