const express = require('express')
const { getMusics } = require('../controllers/Musics/music')

const app = express.Router()

app.get('/list', (req, res) => {
    console.log('Listed musics');
    return getMusics(req, res);
})

module.exports = app;