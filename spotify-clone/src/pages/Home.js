import React, { useState} from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 200px; /* Adjusted width */
  padding: 20px;
  margin: 10px;
  background-color: #1c1c1c;
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const ResultCard = styled(Card)`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
`;

const ResultImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const SongImage = styled.img`
  width: 100%;
  height: 150px; /* Adjusted height */
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const Home = ({ songs, onSelectSong }) => {
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
  

  const [searchResults, setSearchResults] = useState([]);
  const [artistSongs, setArtistSongs] = useState([]);

  const handleSearch = (query) => {
    if (query === '') {
      setSearchResults([]);
      return;
    }

    const songResults = songs.filter(song =>
      (song.name && song.name.toLowerCase().includes(query.toLowerCase())) ||
      (song.artist && song.artist.toLowerCase().includes(query.toLowerCase()))
    );

    setSearchResults(songResults);
  };

  const handleArtistClick = (artistId) => {
    const fetchArtistSongs = async (artistId) => {
      try {
        const response = await fetch(`http://localhost:5000/api/artists/${artistId}/songs`);
        if (response.ok) {
          const data = await response.json();
          setArtistSongs(data);
        } else {
          console.error('Failed to fetch artist songs');
        }
      } catch (error) {
        console.error('Error fetching artist songs:', error);
      }
    };

    fetchArtistSongs(artistId);
  };

  return (
    <HomeContainer>
      <h1>Welcome to Spotify 2.0</h1>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search for songs..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </SearchContainer>

      {searchResults.length > 0 && (
        <div>
          <h3>Search Results</h3>
          <SectionContainer>
            {searchResults.map((song, index) => (
              <ResultCard key={index} onClick={() => onSelectSong(song, index)}>
                <ResultImage src={song.image} alt={song.name} />
                <div>
                  <h4>{song.name}</h4>
                  <p>by {song.artist}</p>
                </div>
              </ResultCard>
            ))}
          </SectionContainer>
        </div>
      )}

      <SectionTitle>Top Artists</SectionTitle>
      <SectionContainer>
        {artists.map(artist => (
          <Card key={artist.id} onClick={() => handleArtistClick(artist.id)}>
            <img src={artist.image} alt={artist.name} style={{ width: '100%', borderRadius: '50%', height: '150px' }} /> {/* Adjusted height */}
            <h3>{artist.name}</h3>
          </Card>
        ))}
      </SectionContainer>

      {artistSongs.length > 0 && (
        <div>
          <SectionTitle>Artist Songs</SectionTitle>
          <SectionContainer>
            {artistSongs.map((song, index) => (
              <Card key={song.id} onClick={() => onSelectSong(song, index)}>
                <SongImage src={song.image} alt={song.name} />
                <h3>{song.name}</h3>
                <p>by {song.artist}</p>
              </Card>
            ))}
          </SectionContainer>
        </div>
      )}

      <SectionTitle>Top Songs</SectionTitle>
      <SectionContainer>
        {songs.slice(0, 4).map((song, index) => (
          <Card key={song.id} onClick={() => onSelectSong(song, index)}>
            <SongImage src={song.image} alt={song.name} />
            <h3>{song.name}</h3>
            <p>by {song.artist}</p>
          </Card>
        ))}
      </SectionContainer>
    </HomeContainer>
  );
};

export default Home;
