import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #282828;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
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

const PlayButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const PlayControls = ({ isPlaying, currentSong, onPlayPause, onNext, onPrevious }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  return (
    <ControlsContainer isVisible={!!currentSong}>
      {currentSong ? (
        <>
          <SongInfo>
            <SongImage src={currentSong.image} alt={currentSong.title} />
            <SongTitle>{currentSong.title} by {currentSong.artist}</SongTitle>
          </SongInfo>
          <AudioControl ref={audioRef} controls src={currentSong.url}>
            Your browser does not support the audio element.
          </AudioControl>
        </>
      ) : (
        <SongTitle>Select a song to play</SongTitle>
      )}
      <div>
        <PlayButton onClick={onPrevious}>⏮</PlayButton>
        <PlayButton onClick={onPlayPause}>{isPlaying ? '⏸' : '▶️'}</PlayButton>
        <PlayButton onClick={onNext}>⏭</PlayButton>
      </div>
    </ControlsContainer>
  );
};

export default PlayControls;
