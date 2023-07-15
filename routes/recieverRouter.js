const express = require('express');


const authMiddleware = require('../middlewares/authMiddleware');
const { createReciever } = require('../controllers/recieverController');


const router = express.Router()


router.post('/reciever', createReciever)

module.exports = router