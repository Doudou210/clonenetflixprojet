import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./compontents/Home";
import "./App.css";
// import "./Header.css";
// import "./FeaturedMovie.css";
// import "./MovieSection";
// import MovieSection from "./compontents/MovieSection";
import Home1 from "./compontents/Home1";
import Details from "./compontents/Details"


function App() {
  return (
      
      <Routes>
        <Route path="/" element={<Home1/>}/>
        <Route path='/home/details' Component={Details}/>

        {/* <Route path="/page" element={<MovieSection/>}/> */}
      </Routes>
  );
}

export default App;