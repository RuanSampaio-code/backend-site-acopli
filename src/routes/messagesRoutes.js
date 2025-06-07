import express from "express";
import MessagesController from "../controller/messagesController.js";

const router = express.Router();

router.get("/messages", MessagesController.listMessages);
router.post("/messages", MessagesController.sendMessage);
router.delete("/messages/:id", MessagesController.deleteMessage);

// Exporta o router para ser usado no app principal
export default router;