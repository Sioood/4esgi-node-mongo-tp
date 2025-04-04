const express = require("express");
const router = express.Router();
const commentController = require("../controller/comment.controller");

router.post('/create/:id', commentController.createComment);
router.put('/edit/:id', commentController.editComment);
router.delete('/delete/:id', commentController.deleteComment);

module.exports = router;