const express = require('express');
const router = express.Router();
const message = require('../controllers/message')

/* GET home page. */
router.get('/', message.index);

router.get('/new', message.message_create);

router.post('/new', message.message_post)

module.exports = router;
