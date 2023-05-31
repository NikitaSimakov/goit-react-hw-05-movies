

import { getMovie } from "components/GetMovie/getMovie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// https://api.themoviedb.org/3/movie/{movie_id}/credits
// https://api.themoviedb.org/3/movie/502356/credits?api_key=fac36845d9f7873a94c26906e62793ef
// `https://image.tmdb.org/t/p/w300${movie.poster_path}`


const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId }  = useParams();
    useEffect(()=>{
        const REQUEST_API = `movie/${movieId}/credits?`
        if (movieId !== '') getMovie(REQUEST_API).then(resp => setCast(resp.cast)).then(console.log(cast))
    }, [movieId]);
    return <>
    <h1>Cast</h1>
    <ul>
    {cast.map(profile => <li>
        <img alt={profile.name} src={profile.profile_path && `https://image.tmdb.org/t/p/w200${profile.profile_path}`} />
        <h3>{profile.name}</h3>
    </li>)}
    </ul>
    </>
}

export default Cast;