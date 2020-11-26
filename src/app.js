const express = require('express');
const cors = require('cors');
const { register, getUsers } = require('./controllers/Users/user');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, xeq) => {
    return xeq.send('<h1>SpotifyBack is working!</h1>');
})

app.post('/user/register', (req, res) => {
    console.log('User created!')
    return register(req, res);
})

app.get('/user/list', (req, res) => {
    console.log('Listed users');
    return getUsers(req, res);
})





console.log('Server started')
app.listen(3000);