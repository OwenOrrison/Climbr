const express = require('express');
const router = express.Router();
const db = require('../queries')

/* GET home page. */
router.get('/', ((req, res, next)=> {
  res.json({ info: 'Node.js, Express, and Postgres API'});
}));

router.get('/users', db.getUsers)
router.get('/users/:id', db.getUserById)
router.post('/users', db.createUser)
router.post('/users/login', db.checkUser)
router.put('/users/:id', db.updateUser)
router.delete('/users/:id', db.deleteUser)

router.get('/messages', db.getMessages)
router.get('/messages/:id', db.getMessagesById)
router.post('/messages', db.createMessages)
router.put('/messages/:id', db.updateMessages)
router.delete('/messages/:id', db.deleteMessages)

router.get('/pgmessages', db.getPg)
// router.post('/messagespg', db.createMessagesPG)
router.get('/prg', db.getMessagesPRG)
// router.post('/messages/PRG', db.createMessagesPRG)
router.get('/tce', db.getMessagesTCE)
// router.post('/messages/TCE', db.createMessagesTCE)
router.get('/tcs', db.getMessagesTCS)
// router.post('/messages/TCS', db.createMessagesTCS)
router.get('/tct', db.getMessagesTCT)
// router.post('/messages/TCT', db.createMessagesTCT)

module.exports = router;
