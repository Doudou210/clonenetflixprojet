import React, { useState } from 'react';
import axios from 'axios';


const SearchBar = ({ setSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=72129ff15d34796f3db50131e287cc65&query=${query}`)
      .then(response => {
        setSearchResults(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input type="text" placeholder="Titres, personnes, genres" value={query} onChange={handleInputChange} />
      <button type="submit" className="search-button">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;