export const getMovie = async () => {
    try {
    const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=fac36845d9f7873a94c26906e62793ef")
    const movies = await response.json()
    return movies;
} catch (error) {
        console.log(error)
    }
}

