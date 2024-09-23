const { Router } = require("express");
const MessageController = require("./app/controllers/MessageController");

const router = Router();

router.get("/message", MessageController.index);
router.get("/message/:id", MessageController.show);
router.post("/message/", MessageController.sendBotMessage);

module.exports = router;
