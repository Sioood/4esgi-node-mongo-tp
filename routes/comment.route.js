const express = require("express");
const router = express.Router();

router.post('/create', commentController.create);
router.put('/edit', commentController.edit);
router.delete('/delete', commentController.delete);

module.exports = router;