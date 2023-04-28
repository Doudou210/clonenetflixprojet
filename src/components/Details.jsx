import axios from "axios";
import React, {useState, useEffect} from "react";
import MovieSection from "./MovieSection";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Details.css";



export default function Details(props){
  const [searchResults, setSearchResults] = useState([]);
    return(
        <div className="searcher">
            <div className="searchbar">
            <Link to={"/clonenetflixprojet"}>
                <span class="material-symbols-outlined">
                    arrow_back_ios
                </span></Link>
                <SearchBar setSearchResults={setSearchResults} />
            </div>

            {searchResults.map(movie => (
                
            <div className="search__image">
                <div className="search" key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <p>{movie.overview}</p>
                </div>
            </div>
      ))}
        </div>
    )
}
