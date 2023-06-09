import { Suspense, useEffect, useRef, useState } from "react";
import { getMovie } from "components/GetMovie/getMovie";
import Loader from "components/Loader/Loader";
import css from './MovieDetails.module.css'


const { useParams, Link, Outlet, useLocation } = require("react-router-dom")

const MovieDetails = () => {
    const [movie, setMovie] = useState({})
    const params = useParams();
    const location = useLocation();
    const linkLocationBackRef = useRef(location);
    useEffect(()=>{
        const { movieId } = params;
        const REQUEST_API = `movie/${movieId}?`;
        getMovie(REQUEST_API).then(resp => setMovie(resp));
      },[params]);
      
      const linkLocationBackRefFrom = `/movies${linkLocationBackRef.current.state?.from.search ?? ''}`
      return (
        <div className={css.movieDetails_wrapper}>
            <p className={css.movieDetails_genres}>{movie.genres && movie.genres.map(genre => genre.name + ' ')}</p>
            <Link to={linkLocationBackRef.current.state ? linkLocationBackRefFrom : '/'}><button type="button" className={css.movieDetails_backButton}>Go back</button></Link>
          <div className={css.movieDetails_card}>
            <img className={css.movieDetails_img} alt={movie.title} src={movie.poster_path && `https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
            <div className={css.movieDetails_cardText}>
            <h1>{movie.original_title}</h1>
            <p>User score: {Math.trunc((movie.vote_average)*10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            </div>
            </div>
            <div>
                <h3>Additional information</h3>
                <ul>
                <li><Link to={`/movies/${params.movieId}/cast`}>Cast</Link></li>
                <li><Link to={`/movies/${params.movieId}/reviews`}>Reviews</Link></li>
                </ul>
            </div>
            <Suspense fallback={<Loader/>}>
            <Outlet />
            </Suspense>
        </div>
        
      )
}

export default MovieDetails;