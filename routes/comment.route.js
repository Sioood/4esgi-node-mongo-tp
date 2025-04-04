const express = require("express");
const router = express.Router();
const commentController = require("../controller/comment.controller");
const authMiddleware = require("../middleware/auth.middleware.js");

router.post('/create/:id', authMiddleware, commentController.createComment);
router.put('/edit/:id', authMiddleware, commentController.editComment);
router.delete('/delete/:id', authMiddleware, commentController.deleteComment);

module.exports = router;