import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TopArtists from './components/TopArtists';
import TopCharts from './components/TopCharts';
import Artist from './pages/Artist';
import SongList from './components/SongList';
import AlbumList from './components/AlbumList';
import PlayControls from './components/PlayControls';
import { getSongs } from './api';

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    const fetchSongs = async () => {
      const fetchedSongs = await getSongs();
      setSongs(fetchedSongs);
    };
    fetchSongs();
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (currentIndex < songs.length - 1) {
      setCurrentSong(songs[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
      setIsPlaying(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentSong(songs[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
      setIsPlaying(true);
    }
  };

  const handleSelectSong = (song, index) => {
    setCurrentSong(song);
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home songs={songs} onSelectSong={handleSelectSong} />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/top-charts" element={<TopCharts />} />
          <Route path="/artist/:name" element={<Artist />} />
          <Route path="/songs" element={<SongList songs={songs} onSelectSong={handleSelectSong} />} />
          <Route path="/albums" element={<AlbumList />} />
        </Routes>
        <PlayControls
          isPlaying={isPlaying}
          currentSong={currentSong}
          onPlayPause={handlePlayPause}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </Router>
    </ThemeProvider>
  );
};

export default App;
