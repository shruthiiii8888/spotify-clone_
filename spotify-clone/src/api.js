import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getTopCharts = async () => {
  const response = await axios.get(`${API_URL}/top-charts`);
  return response.data;
};

export const getSongs = async () => {
  const response = await axios.get(`${API_URL}/songs`);
  return response.data;
};



export const getTopArtists = async () => {
  try {
    const response = await axios.get(`${API_URL}/top-artists`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top artists:', error.response || error.message);
    throw error;
  }
};

export const getArtistDetails = async (artistId) => {
  try {
    const response = await axios.get(`${API_URL}/artists/${artistId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for artist ID ${artistId}:`, error.response || error.message);
    throw error;
  }
};

export const getArtistSongs = async (artistId) => {
  try {
    const response = await axios.get(`${API_URL}/artists/${artistId}/songs`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching songs for artist ID ${artistId}:`, error.response || error.message);
    throw error;
  }
};


export const getAlbums = async () => {
  const response = await fetch('http://localhost:5000/api/albums');
  if (!response.ok) {
    throw new Error('Failed to fetch albums');
  }
  const data = await response.json();
  return data;
};


// api.js
export const getAlbumSongs = async (albumId) => {
  try {
    const response = await fetch(`http://localhost:5000/api/albums/${albumId}/songs`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching album songs:', error);
    return [];
  }
};
