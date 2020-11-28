playlists = [
    {
        "id": 1,
        "name": "Black History Is Now",
        "img": "../../assets/images/image0.png",
        "musics": [
          1
        ]
      },
      {
        "id": 2,
        "name": "Higher Ground",
        "img": "../../assets/images/image1.png"
      },
      {
        "id": 3,
        "name": "Radar",
        "img": "../../assets/images/image2.png"
      },
      {
        "id": 4,
        "name": "Samba & Pagode",
        "img": "../../assets/images/image3.png",
        "musics": [
          2,
          3
        ]
      },
      {
        "id": 5,
        "name": "Bem-estar",
        "img": "../../assets/images/image4.png"
      },
      {
        "id": 6,
        "name": "Em Casa",
        "img": "../../assets/images/image5.png"
      },
      {
        "id": 7,
        "name": "Brasil",
        "img": "../../assets/images/image6.png",
        "musics": [
          4,
          5,
          6
        ]
      },
      {
        "id": 8,
        "name": "Sertanejo",
        "img": "../../assets/images/image7.png"
      },
      {
        "id": 9,
        "name": "Funk",
        "img": "../../assets/images/image8.png",
        "musics": [
          7,
          8
        ]
      },
      {
        "id": 10,
        "name": "Pop",
        "img": "../../assets/images/image9.png"
      }
];

function getPlaylists(req, res) {
    try {
        return res.status(200).send(playlists)
    } catch (err) {
        console.error(err)
        return {error: err}
    }
}

module.exports =  {
    getPlaylists
}