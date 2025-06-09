const express = require('express')
const router = express.Router()

/* Controller */
const { listUsers, readUser, addUser, updateUser, deleteUser } = require('../controllers/users')
/* Middleware */


/* For admin */
router.get('/users', listUsers)
router.get('/users/:id', readUser)
router.post('/users', addUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)


module.exports = router