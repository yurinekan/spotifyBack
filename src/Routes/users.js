const express = require('express')
const { register, getUsers, updateUsers } = require('../controllers/Users/user')

const app = express.Router()

app.post('/register', (req, res) => {
    console.log('User created!')
    return register(req, res);
})

app.get('/list', (req, res) => {
    console.log('Listed users');
    return getUsers(req, res);
})

app.put('/update', (req, res) => {
    console.log('Updated user');
    return updateUsers(req, res);
})

module.exports = app