import { Suspense, useEffect, useRef, useState } from "react";
import { getMovie } from "components/GetMovie/getMovie";
import Loader from "components/Loader/Loader";


const { useParams, Link, Outlet, useLocation } = require("react-router-dom")

const MovieDetails = () => {
    const [movie, setMovie] = useState({})
    const params = useParams();
    const location = useLocation();
    const linkLocationBackRef = useRef(location);
    // console.log(location);
    // console.log(linkLocationBackRef)
    useEffect(()=>{
        const { movieId } = params;
        const REQUEST_API = `movie/${movieId}?`;
        getMovie(REQUEST_API).then(resp => setMovie(resp));
      },[params]);
      
      
      const linkLocationBackRefFrom = `/movies${linkLocationBackRef.current.state?.from.search ?? ''}`
      return (
        <div>
            <Link to={linkLocationBackRef.current.state ? linkLocationBackRefFrom : '/'}><button type="button" >Go back</button></Link>
            {/* <Link to={`/movies${linkLocationBackRef.current.state?.from.search ?? ''}`}><button type="button" >Go back</button></Link> */}
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
            <Suspense fallback={<Loader/>}>
            <Outlet />
            </Suspense>
        </div>
        
      )
}

export default MovieDetails;