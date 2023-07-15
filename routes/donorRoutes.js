const express = require('express');

// const { donorController } = require('../controllers/donorController')
const authMiddleware = require('../middlewares/authMiddleware');
const { createDonor } = require('../controllers/donorController');

const router = express.Router()


router.post('/donor', createDonor)

// Get Current User || Get
// router.get('/current-user', authMiddleware, currentUserController)
module.exports = router