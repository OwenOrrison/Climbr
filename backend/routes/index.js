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

module.exports = router;
