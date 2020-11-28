id = 0;
personalPlaylists = [
    {
        "name": "Funk",
        "description": "Playlist de funk",
        "color": "#ff0000",
        "music_ids": [
          4,
          8,
          3
        ],
        "user_id": "1",
        "id": 2
      }
]

function createPlaylist(req, res) {
    const { name, description, color, music_ids, user_id } = req.body;
    try {
        newPlaylist = {
            name,
            description,
            color,
            music_ids,
            user_id,
            id
        };
        personalPlaylists.push(newPlaylist)
        id++;
        return res.status(201).send(newPlaylist)
    } catch (err) {
        console.error(err);
    } 
}

function getPersonalPlaylists(req, res) {
    try {
        return res.status(200).send(personalPlaylists)
    } catch (err) {
        console.error(err)
        return {error: err}
    }
}

function editPersonalPlaylists(req, res) {
    const { name, description, color, music_ids, user_id } = req.body;
}
module.exports = {
    //
    getPersonalPlaylists,
    createPlaylist,
}