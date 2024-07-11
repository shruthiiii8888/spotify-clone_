import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAlbums } from '../api';
import AlbumSongs from './AlbumSongs'; // Import the AlbumSongs component

const AlbumContainer = styled.div`
  padding: 20px;
`;

const AlbumListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* Increased gap */
`;

const AlbumItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px; /* Increased width */
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const AlbumImage = styled.img`
  width: 200px; /* Increased width */
  height: 200px; /* Increased height */
  border-radius: 12px; /* Increased border radius */
`;

const AlbumTitle = styled.span`
  margin-top: 10px;
  font-size: 20px; /* Increased font size */
  text-align: center;
`;

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const data = await getAlbums();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <AlbumContainer>
      <h2>Albums</h2>
      <AlbumListContainer>
        {albums.map(album => (
          <AlbumItem key={album.id} onClick={() => setSelectedAlbumId(album.id)}>
            <AlbumImage src={album.image} alt={album.title} />
            <AlbumTitle>{album.title}</AlbumTitle>
          </AlbumItem>
        ))}
      </AlbumListContainer>
      {selectedAlbumId && <AlbumSongs albumId={selectedAlbumId} />}
    </AlbumContainer>
  );
};

export default AlbumList;
