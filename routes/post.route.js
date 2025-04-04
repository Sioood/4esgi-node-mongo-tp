const express = require("express");
const router = express.Router();

router.post('/create', postController.create);
router.get('/:id', postController.getOne);
router.put('/:id', postController.editOne);
router.delete('/:id', postController.deleteOne);
router.get('/', postController.getAll);

module.exports = router;