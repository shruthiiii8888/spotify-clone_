import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getArtistSongs } from '../api';  // Assume this function fetches songs by artist

const ArtistContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const SongList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SongItem = styled.div`
  width: 300px;
  padding: 10px;
  margin: 10px;
  background-color: #1c1c1c;
  color: white;
  border-radius: 8px;
  text-align: left;
`;

const Artist = () => {
  const { name } = useParams();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const fetchedSongs = await getArtistSongs(name);
      setSongs(fetchedSongs);
    };
    fetchSongs();
  }, [name]);

  return (
    <ArtistContainer>
      <h1>{name}</h1>
      <SongList>
        {songs.map((song, index) => (
          <SongItem key={index}>
            <h3>{song.name}</h3>
            <p>{song.artist}</p>
          </SongItem>
        ))}
      </SongList>
    </ArtistContainer>
  );
};

export default Artist;
