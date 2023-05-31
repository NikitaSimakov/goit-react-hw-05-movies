import { useEffect, useState } from "react";
import { getMovie } from "components/GetMovie/getMovie";


const { useParams, Link, Outlet } = require("react-router-dom")

const MovieId = () => {
    const [movie, setMovie] = useState({})
    const params = useParams();
    
    useEffect(()=>{
        const { movieId } = params;
        const REQUEST_API = `movie/${movieId}?`;
        getMovie(REQUEST_API).then(resp => setMovie(resp))
      },[params]);
      return (
        <div>
            <Link to="/"><button type="button" >Go back</button></Link>
            <img alt={movie.title} src={movie.poster_path && `https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
            <h1>{movie.original_title}</h1>
            <p>User score: {Math.trunc((movie.vote_average)*10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres && movie.genres.map(genre => genre.name + ' ')}</p>
            <div>
                <h3>Additional information</h3>
                <ul>
                <li><Link to={`/movies/${params.movieId}/cast`}>Cast</Link></li>
                <li><Link to={`/movies/${params.movieId}/reviews`}>Reviews</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
        
      )
}

export default MovieId;