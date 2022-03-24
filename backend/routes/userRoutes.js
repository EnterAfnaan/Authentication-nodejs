const express = require('express')

const { registerUser , loginUser , getMe } = require('../controllers/userController')

const {protected} = require('../middleware/authMiddleware')

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me',protected, getMe);

module.exports = router