const express = require('express');

// const { donorController } = require('../controllers/donorController')
const authMiddleware = require('../middlewares/authMiddleware');
const { createReciever } = require('../controllers/recieverController');


const router = express.Router()


router.post('/reciever', createReciever)

// Get Current User || Get
// router.get('/current-user', authMiddleware, currentUserController)
module.exports = router