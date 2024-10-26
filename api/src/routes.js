const { Router } = require('express');
const MessageController = require('./app/controllers/MessageController');
const UserController = require('./app/controllers/UserController');

const router = Router();

router.post('/login', UserController.login);

module.exports = router;
