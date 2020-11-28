const express = require('express');
const cors = require('cors');
const { register, getUsers, updateUsers } = require('./controllers/Users/user');
const { getPersonalPlaylists, createPlaylist } = require('./controllers/Playlists/personalPlaylists');
const { getPlaylists } = require('./controllers/Playlists/playlist');

const app = express();
app.use(cors());
app.use(express.json());

// const users = require('./Routes/users')
// app.use('/user', users)

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

app.put('/user/update', (req, res) => {
    console.log('Updated user');
    return updateUsers(req, res);
})


// PLAYLISTS ====================================

app.post('/personalPlaylist/register', (req, res) => {
    console.log('Playlist created!')
    return createPlaylist(req, res);
})

app.get('/personalPlaylist/list', (req, res) => {
    console.log('Listed personal playlists')
    return getPersonalPlaylists(req, res);
})

app.put('/personalPlaylist/update', (req, res) => {
    console.log('Listed personal playlists')
    return getPersonalPlaylists(req, res);
})

app.get('/playlist/list', (req, res) => {
    console.log('Listed playlists')
    return getPlaylists(req, res);
})






console.log('Server started')
app.listen(3000);