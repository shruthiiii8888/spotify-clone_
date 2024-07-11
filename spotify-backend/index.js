const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

// Middleware
app.use(cors());

// Static file serving
app.use('/music', express.static(path.join(__dirname, 'music')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Data
//const artists = require('./data/artists.json');
const charts = require('./data/charts.json');
const songs = require('./data/songs.json');
const albums = require('./data/albums.json');

// Routes
app.get('/api/songs', (req, res) => {
  res.json(songs);
});

app.get('/api/top-artists', (req, res) => {
  res.json(artists);
});

app.get('/api/top-charts', (req, res) => {
  res.json(charts);
});

app.get('/api/albums', (req, res) => {
  res.json(albums);
});

app.get('/api/albums/:albumId/songs', (req, res) => {
  const albumId = parseInt(req.params.albumId, 10);
  const album = albums.find(album => album.id === albumId);
  if (album) {
    res.json(album.songs);
  } else {
    res.status(404).send('Album not found');
  }
});
// Add this endpoint to your existing Express server setup


const artists = [
  {
    id: 1,
    name: 'SHREYA',
    image: 'http://localhost:5000/images/shreya.jpg',
    songs: [
      { id: 1, name: 'Song 1-1', url: 'http://localhost:5000/music/song1.mp3', image: 'http://localhost:5000/images/song1.jpg' },
      { id: 2, name: 'Song 1-2', url: 'http://localhost:5000/music/song2.mp3', image: 'http://localhost:5000/images/song2.jpg' }
    ]
  },
  {
    id: 2,
    name: 'ARJIT',
    image: 'http://localhost:5000/images/arjit.jpg',
    songs: [
      { id: 1, name: 'Song 2-1', url: 'http://localhost:5000/music/song2.mp3', image: 'http://localhost:5000/images/song3.jpg' },
      { id: 2, name: 'Song 2-2', url: 'http://localhost:5000/music/song3.mp3', image: 'http://localhost:5000/images/song4.jpg' }
    ]
  },
  {
    id: 3,
    name: 'MANGLI',
    image: 'http://localhost:5000/images/mangli.jpg',
    songs: [
      { id: 1, name: 'Song 3-1', url: 'http://localhost:5000/music/song3.mp3', image: 'http://localhost:5000/images/song5.jpg' },
      { id: 2, name: 'Song 3-2', url: 'http://localhost:5000/music/song4.mp3', image: 'http://localhost:5000/images/song6.jpg' }
    ]
  },
  {
    id: 4,
    name: 'CHITRA',
    image: 'http://localhost:5000/images/chitra.jpg',
    songs: [
      { id: 1, name: 'Song 4-1', url: 'http://localhost:5000/music/song5.mp3', image: 'http://localhost:5000/images/song7.jpg' },
      { id: 2, name: 'Song 4-2', url: 'http://localhost:5000/music/song6.mp3', image: 'http://localhost:5000/images/song8.jpg' }
    ]
  },
  {
    id: 5,
    name: 'SUNEETHA',
    image: 'http://localhost:5000/images/suneetha.jpg',
    songs: [
      { id: 1, name: 'Song 5-1', url: 'http://localhost:5000/music/song7.mp3', image: 'http://localhost:5000/images/song9.jpg' },
      { id: 2, name: 'Song 5-2', url: 'http://localhost:5000/music/song8.mp3', image: 'http://localhost:5000/images/song10.jpg' }
    ]
  },
  {
    id: 6,
    name: 'BALA SUBRAMANYAM',
    image: 'http://localhost:5000/images/bs.jpg',
    songs: [
      { id: 1, name: 'Song 6-1', url: 'http://localhost:5000/music/song9.mp3', image: 'http://localhost:5000/images/song9.jpg' },
      { id: 2, name: 'Song 6-2', url: 'http://localhost:5000/music/song10.mp3', image: 'http://localhost:5000/images/song10.jpg' }
    ]
  }
];


app.get('/api/artists/:id/songs', (req, res) => {
  const artistId = parseInt(req.params.id, 10);
  const artist = artists.find(a => a.id === artistId);
  if (artist) {
    res.json(artist.songs);
  } else {
    res.status(404).json({ error: 'Artist not found' });
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
