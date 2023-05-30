const API_KEY = 'fac36845d9f7873a94c26906e62793ef'


// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=fac36845d9f7873a94c26906e62793ef
export const getMovie = async (request) => {
    try {
    const response = await fetch(`https://api.themoviedb.org/3/${request}api_key=${API_KEY}`)
    const movies = await response.json()
    return movies;
} catch (error) {
        console.log(error)
    }
}

