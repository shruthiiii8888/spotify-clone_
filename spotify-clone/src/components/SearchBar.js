import React, { useState } from 'react';
import styled from 'styled-components';

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

const SearchBar = ({ onSearch, searchResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase(); // Convert input to lowercase

    // Check if query is empty or undefined
    if (!searchText || searchText.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Simulate search results based on the query
    const results = searchResults.filter(song =>
      song.name.toLowerCase().includes(searchText) ||
      song.artist.toLowerCase().includes(searchText)
    );
    setSearchResults(results);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for songs, artists..."
        onChange={handleSearch}
      />
      {searchResults && searchResults.length > 0 && (
        <div>
          <h3>Search Results</h3>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result.name}</li>
            ))}
          </ul>
        </div>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
