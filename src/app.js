const express = require('express');
const cors = require('cors');
const { getPlaylists } = require('./controllers/Playlists/playlist');

const app = express();
app.use(cors());
app.use(express.json());

const users = require('./Routes/users')
app.use('/user', users)

const personalPlaylist = require('./Routes/personalPlaylists');
app.use('/personalPlaylist', personalPlaylist)

const musics = require('./Routes/musics');
app.use('/music', musics)





app.get('/playlist/list', (req, res) => {
    console.log('Listed playlists')
    return getPlaylists(req, res);
})

console.log('Server started')
app.listen(3000);