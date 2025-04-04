const express = require("express");
const router = express.Router();
const postController = require("./../controller/posts.controller.js");

const authMiddleware = require("../middleware/auth.middleware.js");

router.post('/create', postController.create);
router.get('/:id', postController.getOne);
router.put("/:id", authMiddleware, postController.editOne);
router.delete('/:id', authMiddleware, postController.deleteOne);
router.get('/', postController.getAll);

module.exports = router;