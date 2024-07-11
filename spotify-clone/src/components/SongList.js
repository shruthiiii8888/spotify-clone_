import React from 'react';
import styled from 'styled-components';

const SongContainer = styled.div`
  padding: 20px;
`;

const SongListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const SongItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px; /* Increased width */
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const SongImage = styled.img`
  width: 150px; /* Increased width */
  height: 150px; /* Increased height */
  border-radius: 10px;
`;

const SongTitle = styled.span`
  margin-top: 10px;
  font-size: 18px; /* Increased font size */
  text-align: center;
`;

const SongList = ({ songs, onSelectSong }) => {
  return (
    <SongContainer>
      <h2>Songs</h2>
      <SongListContainer>
        {songs.map((song, index) => (
          <SongItem key={song.id} onClick={() => onSelectSong(song, index)}>
            <SongImage src={song.image} alt={song.title} />
            <SongTitle>{song.title}</SongTitle>
          </SongItem>
        ))}
      </SongListContainer>
    </SongContainer>
  );
};

export default SongList;
