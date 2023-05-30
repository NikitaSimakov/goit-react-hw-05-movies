import { getMovie } from "components/GetMovie/getMovie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=fac36845d9f7873a94c26906e62793ef
const Movies = () => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([])
  // const params = useParams();
  const handleInput = (event) => {
    
    const {value} = event.currentTarget;
    setValue(value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(value);
  }
  useEffect(()=>{
    const REQUEST_API = `search/movie?query=${query}&`

    if(query !== '') getMovie(REQUEST_API).then(resp => setMovies(resp.results))
  },[query])
  return (<>
  <form onSubmit={handleSubmit}>
    <input type="text" autoComplete="off" placeholder="Search movies" value={value} onChange={handleInput}></input>
    <button type="submit" >Search</button>
  </form>
  <div>
    <ul>
      {movies.map(({ title, id }) => <li key={id}><Link to={`/movies/${id}`}>{title}</Link></li>)}
    </ul>
  </div>
  </>)
  
};

export default Movies;
