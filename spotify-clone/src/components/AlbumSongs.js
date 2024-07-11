import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAlbumSongs } from '../api';

const SongsContainer = styled.div`
  padding: 20px;
`;

const SongListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SongItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px; /* Increased width */
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const SongImage = styled.img`
  width: 200px; /* Increased width */
  height: 200px; /* Increased height */
  border-radius: 10px;
`;

const SongTitle = styled.span`
  margin-top: 10px;
  font-size: 18px; /* Increased font size */
  text-align: center;
`;

const AlbumSongs = ({ albumId }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const data = await getAlbumSongs(albumId);
        setSongs(data || []);
      } catch (error) {
        console.error('Error fetching album songs:', error);
        setSongs([]);
      }
    };

    fetchSongs();
  }, [albumId]);

  return (
    <SongsContainer>
      <h2>Album Songs</h2>
      {songs.length > 0 ? (
        <SongListContainer>
          {songs.map(song => (
            <SongItem key={song.id}>
              <SongImage src={song.image} alt={song.title} />
              <SongTitle>{song.title}</SongTitle>
            </SongItem>
          ))}
        </SongListContainer>
      ) : (
        <p>No songs available for this album.</p>
      )}
    </SongsContainer>
  );
};

export default AlbumSongs;
