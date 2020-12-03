const express = require('express');
const router = express.Router();
// const comments = require('../data/comments')
const commentController = require('../controllers/comments')

router.get('/comments', commentController.list);
router.get('/comments/:id', commentController.show)
router.post('/comments', commentController.create)

module.exports = router;