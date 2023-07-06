import React, {useState, useEffect} from "react";
import Header from "./Header";
import ApiMovie from "../ApiMovie";
import FeaturedMovie from "./FeaturedMovie";
import MovieSection from "./MovieSection";
import SearchBar from "./SearchBar";
import "./Header.css"

export default function Home(){
    const [moviesList, setMoviesList] = useState([])
    const [featuredData, setfeaturedData] = useState(null)
    const [searchResults, setSearchResults] = useState([])
      useEffect(() => {
            const loadAllMovies = async () => {
                //liste de tous les film
                  let list = await ApiMovie.getHomeMovies() 
      setMoviesList(list)

    //un seul film a l'affiche
      let originals = list.filter((oneMovie) => oneMovie.slug === "top-rated")
      
      let chooseRandomMovie = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      )
      let chosen = originals[0].items.results[chooseRandomMovie]
      let chosenInfo = await ApiMovie.getyMovieInfo(chosen.id, "movie")
      setfeaturedData(chosenInfo)
     
    }
    
    loadAllMovies()
    

  }, [])


  return (
    <div className="page">
      <Header />
      {featuredData && <FeaturedMovie films={featuredData} />}
      <section className="lists">
        {moviesList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>


  )

}