import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css'


const SearchBar = ({ setSearchResults }) => {
  const [query, setQuery] = useState();

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
    <div className='wrapper'>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input type="text" placeholder="Titres, personnes, genres" value={query} onChange={handleInputChange} />
      </form>
    </div>
    
  );
};

export default SearchBar;