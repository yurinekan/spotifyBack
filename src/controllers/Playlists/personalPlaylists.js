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
        "user_id": 1,
        "id": 0
      },
      {
        "name": "Pipoca",
        "description": "Playlist de funk",
        "color": "#ff0000",
        "music_ids": [
          4,
          8,
          3
        ],
        "user_id": 2,
        "id": 1
      },
      {
        "name": "Pipoca",
        "description": "Playlist de funk",
        "color": "#ff0000",
        "music_ids": [
          4,
          8,
          3
        ],
        "user_id": 2,
        "id": 1
      },
      {
        "name": "Pipoca",
        "description": "Playlist de funk",
        "color": "#ff0000",
        "music_ids": [
          4,
          8,
          3
        ],
        "user_id": 2,
        "id": 1
      }
]

function createPlaylist(req, res) {
    const { name, description, color, music_ids, user_id } = req.body;
    try {
        personalPlaylists.filter
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

function filterByID(personalPlaylists) {
    if ('user_id' in obj && typeof(obj.user_id) === 'number' && obj.user_id === id && !isNaN(obj.user_id)) {
      return true;
    } else {
      return false;
    }
  }

function getPersonalPlaylists(req, res) {
    const { user_id } = req.body; 
    try {
        var arrByID = personalPlaylists.filter((playlist) => {
            return playlist.user_id == user_id;
        });
        return res.status(200).send(arrByID)
    } catch (err) {
        console.error(err)
        return {error: err}
    }
}

function editPersonalPlaylists(req, res) {
    const { name, description, color, music_ids, user_id } = req.body;
    try {
        return res.status(200).send(personalPlaylists)
    } catch (err) {
        console.error(err)
        return {error: err}
    }
}
module.exports = {
    //
    getPersonalPlaylists,
    createPlaylist,
    editPersonalPlaylists,
}