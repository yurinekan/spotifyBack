const express = require('express')
const { getPersonalPlaylists, createPlaylist } = require('../controllers/Playlists/personalPlaylists')
const app = express.Router()

app.post('/register', (req, res) => {
    console.log('Playlist created!')
    return createPlaylist(req, res);
})

app.get('/list', (req, res) => {
    console.log('Listed personal playlists')
    return getPersonalPlaylists(req, res);
})

app.put('/update', (req, res) => {
    console.log('Listed personal playlists')
    return getPersonalPlaylists(req, res);
})

module.exports = app