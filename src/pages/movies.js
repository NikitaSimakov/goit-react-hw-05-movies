import { getMovie } from "components/GetMovie/getMovie";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import css from './movies.module.css'

// import { useParams } from "react-router-dom";

// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=fac36845d9f7873a94c26906e62793ef
const Movies = () => {

  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  // console.log(location.state)
  // console.log(searchParams);

  

  const handleInput = (event) => {
    const {value} = event.currentTarget;
    setValue(value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(value);
    setSearchParams({ query: value })
    resetInput();
  }
  const resetInput = () => {
    setValue('');
    if(value === '') setSearchParams({});
  }

  useEffect(()=>{
    const queryParam = searchParams.get('query');
    const REQUEST_API = `search/movie?query=${query}&`
    const queryParamApi = `search/movie?query=${queryParam}&`
    if(query !== '') getMovie(REQUEST_API).then(resp => setMovies(resp.results))
    if(queryParam) getMovie(queryParamApi).then(resp => setMovies(resp.results))
  },[query, searchParams])
  return (<>
  <form onSubmit={handleSubmit} className={css.movies_form}>
    <input className={css.movies_input} type="text" autoComplete="off" placeholder="Search movies" value={value} onChange={handleInput}></input>
    <button type="submit" className={css.movies_button} >Search</button>
  </form>
  <div>
    <ul>
      {movies.map(({ title, id }) => <li key={id} className={css.movies_listItem}><Link to={`/movies/${id}`} state={{from: location}}>{title}</Link></li>)}
    </ul>
  </div>
  </>)
  
};

export default Movies;
