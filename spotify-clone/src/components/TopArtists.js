import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ArtistsContainer = styled.div`
  padding: 20px;
  background-color: #121212;
  color: white;
`;

const ArtistList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ArtistItem = styled.li`
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    color: #1db954;
  }
`;

const ArtistDetailsContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ArtistImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const SongList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SongItem = styled.li`
  margin: 10px 0;
  cursor: pointer;
  &:hover {
    color: #1db954;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 20px;
`;

const PlayerContainer = styled.div`
  margin-top: 20px;
  background: #1c1c1c;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const AudioPlayer = styled.audio`
  width: 100%;
  max-width: 600px;
`;

const TopArtists = () => {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [error, setError] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    // Replace with your actual API call
    const fetchArtists = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/top-artists');
        const data = await response.json();
        setArtists(data);
      } catch (error) {
        console.error('Error fetching top artists:', error);
        setError('Failed to load top artists.');
      }
    };

    fetchArtists();
  }, []);

  const handleArtistClick = (artistId) => {
    const artist = artists.find(artist => artist.id === artistId);
    if (artist) {
      setSelectedArtist(artist);
      setError(null);
    } else {
      setError('Failed to load artist details.');
    }
  };

  const handleSongClick = (song) => {
    setCurrentSong(song);
  };

  return (
    <ArtistsContainer>
      <h2>Top Artists</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ArtistList>
        {artists.map(artist => (
          <ArtistItem key={artist.id} onClick={() => handleArtistClick(artist.id)}>
            {artist.name}
          </ArtistItem>
        ))}
      </ArtistList>
      {selectedArtist && (
        <ArtistDetailsContainer>
          <ArtistImage src={selectedArtist.image} alt={selectedArtist.name} />
          <h3>{selectedArtist.name}</h3>
          <SongList>
            {selectedArtist.songs.slice(0, 4).map(song => (
              <SongItem key={song.id} onClick={() => handleSongClick(song)}>
                {song.name}
              </SongItem>
            ))}
          </SongList>
        </ArtistDetailsContainer>
      )}
      {currentSong && (
        <PlayerContainer>
          <h3>Now Playing: {currentSong.name}</h3>
          <AudioPlayer controls src={currentSong.url} autoPlay />
        </PlayerContainer>
      )}
    </ArtistsContainer>
  );
};

export default TopArtists;
