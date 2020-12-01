const express = require('express')
const { registerUser, getUsers, updateUsers, loginUser } = require('../controllers/Users/user')

const app = express.Router()

app.post('/register', (req, res) => {
    console.log('User created!')
    return registerUser(req, res);
})

app.get('/list', (req, res) => {
    console.log('Listed users');
    return getUsers(req, res);
})

app.put('/update', (req, res) => {
    console.log('Updated user');
    return updateUsers(req, res);
})

app.post('/login', (req, res) => {
    console.log('Login succeed')
    return loginUser(req, res)
})

module.exports = app