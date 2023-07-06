import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./compontents/Home";
import "./App.css";
// import "./Header.css";
// import "./FeaturedMovie.css";
// import "./MovieSection";
// import MovieSection from "./compontents/MovieSection";
import Home from "./components/Home";
import Details from "./components/Details"
import DetailsFilm from "./components/DeatilsFilm";


function App() {
  return (
  return (
      
      <Routes>
        <Route path="/clonenetflixprojet" element={<Home/>}/>
        <Route path='/home/details' Component={Details}/>
        <Route path='/home/detailsfilm' Component={DetailsFilm}/>

        {/* <Route path="/page" element={<MovieSection/>}/> */}
      </Routes>
  );
}

export default App;