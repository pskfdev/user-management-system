const express = require('express')
const router = express.Router()

/* Controller */
const { listUsers, readUser, addUser, updateUser, deleteUser } = require('../controllers/users')
/* Middleware */
const { userCheck, permissionEdit, permissionCreate, permissionDelete } = require('../middleware/authCheck')


/* For member */
router.get('/users', userCheck, listUsers)
router.get('/me', userCheck, readUser)

/* For admin */
router.get('/users/:id', userCheck, permissionEdit, readUser)
router.post('/users', userCheck, permissionCreate, addUser)
router.put('/users/:id', userCheck, permissionEdit, updateUser)
router.delete('/users/:id', userCheck, permissionDelete, deleteUser)


module.exports = router