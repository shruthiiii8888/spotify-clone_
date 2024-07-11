import React from 'react';
import styled from 'styled-components';

const ArtistDetailsContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #1c1c1c;
  border-radius: 8px;
`;

const SongList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SongItem = styled.li`
  margin: 10px 0;
`;

const ArtistDetails = ({ artist }) => {
  return (
    <ArtistDetailsContainer>
      <h3>{artist.name}</h3>
      <img src={artist.image} alt={artist.name} style={{ width: '100px', borderRadius: '50%' }} />
      <h4>Songs</h4>
      <SongList>
        {artist.songs.map((song) => (
          <SongItem key={song.id}>
            <p>{song.name}</p>
            <audio controls src={song.url}></audio>
          </SongItem>
        ))}
      </SongList>
    </ArtistDetailsContainer>
  );
};

export default ArtistDetails;
