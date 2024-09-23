const { Router } = require("express");
const ContactController = require("./app/controllers/ContactController");

const router = Router();

router.get("/message", ContactController.index);
router.get("/message/:id", ContactController.show);
router.post("/message/", ContactController.sendBotMessage);

module.exports = router;
