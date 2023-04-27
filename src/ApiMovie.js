const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = "https://api.themoviedb.org/3/"

const fetchMovies = async (endpoint) => {
    return await fetch(
        `${API_URL}${endpoint}?language=fr-FR&api_key=${API_KEY}`
    ).then((response) => response.json())
    
}


export default {
    getHomeMovies: async () => {
        return [
            {
                slug: "top-rated",
                title: "Mieux notés",
                items: await fetchMovies("movie/top_rated")
            },


            {
                slug: "popular-tv",
                title: "Série populaires",
                items: await fetchMovies("tv/popular")
            },

            
            {
                slug: "upcoming",
                title: "Horreur",
                items: await fetchMovies("movie/upcoming")
            },

               
            {
                slug: "comedy",
                title: "Comédie",
                items: await fetchMovies("discover/movie?withgenres=35")
            },

            
            {
                slug: "popular-tv",
                title: "Série populaires",
                items: await fetchMovies("tv/popular")
            },
            
        ]
    },
    
    getyMovieInfo: async (movieId, type) => {
        let info = []
        if (movieId) {
            switch (type) {
                case 'movie':
                    info = await fetchMovies(`movie/${movieId}`)
                    break
                case 'tv':
                        info = await fetchMovies(`tv/${movieId}`)
                        break

                    default:
                        break
            }
        }
        return info
    },

} 