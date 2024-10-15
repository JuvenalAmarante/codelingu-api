const { Router } = require("express");
const MessageController = require("./app/controllers/MessageController");
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');

const router = Router();


router.get("/message", MessageController.index);
router.get("/message/:id", MessageController.show);
router.post("/message/", MessageController.sendBotMessage);
router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);
router.post('/login', AuthController.login);



module.exports = router;
