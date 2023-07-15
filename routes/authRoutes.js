const express = require('express');
const { registerController, loginController, currentUserController } = require('../controllers/authcontroller');
// const { donorController } = require('../controllers/donorController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

// routes
// Register || Post
router.post('/register', registerController)
// Login || Post
router.post('/login', loginController)

// Get Current User || Get
router.get('/current-user', authMiddleware, currentUserController)
module.exports = router