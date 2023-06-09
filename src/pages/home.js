// const API_KEY = 'fac36845d9f7873a94c26906e62793ef'
// https://api.themoviedb.org/3/trending/movie/day?api_key=fac36845d9f7873a94c26906e62793ef


import { getMovie } from "components/GetMovie/getMovie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import css from './home.module.css'

const REQUEST_API = 'trending/movie/day?';
const Home = () => {
  const [movies, setMovies] = useState([]);
useEffect(()=>{
  getMovie(REQUEST_API).then(resp => setMovies(resp.results))
},[]);
// console.log(movies)
  return <div>
  <ul>
    {movies && movies.map(({title, id}) => <li key={id} className={css.home_listItem}><Link to={`/movies/${id}`}>{title}</Link></li>)}
  </ul>
  </div>
};

export default Home;

