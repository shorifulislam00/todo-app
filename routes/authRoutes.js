const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const controller = require('../controllers/authController');

router.post('/register', controller.register);
router.post('/login', controller.login);

router.get('/me', auth, controller.userInfo);

module.exports = router;