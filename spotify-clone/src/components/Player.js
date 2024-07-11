import React from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #282828;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SongInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SongImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 10px;
`;

const SongTitle = styled.span`
  font-size: 16px;
  color: white;
`;

const AudioControl = styled.audio`
  width: 100%;
  margin-left: 20px;
`;

const Player = ({ song }) => {
  return (
    <PlayerContainer>
      <SongInfo>
        <SongImage src={song.image} alt={song.title} />
        <SongTitle>{song.title} by {song.artist}</SongTitle>
      </SongInfo>
      <AudioControl controls>
        <source src={song.url} type="audio/mp3" />
        Your browser does not support the audio element.
      </AudioControl>
    </PlayerContainer>
  );
};

export default Player;
