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

router.get('/pg', db.getPg)
router.post('/pg', db.createPG)
router.get('/prg', db.getPRG)
router.post('/prg', db.createPRG)
router.get('/tce', db.getTCE)
router.post('/tce', db.createTCE)
router.get('/tcs', db.getTCS)
router.post('/tcs', db.createTCS)
router.get('/tct', db.getTCT)
router.post('/tct', db.createTCT)

module.exports = router;
