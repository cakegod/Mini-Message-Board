const express = require('express');
const router = express.Router();
const message = require('../controllers/message')

/* GET home page. */
router.get('/', message.index);

router.route('/new')
  .get(message.displayMessageForm)
  .post(message.createMessage);



module.exports = router;
