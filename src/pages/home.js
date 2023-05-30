// const API_KEY = 'fac36845d9f7873a94c26906e62793ef'
// https://api.themoviedb.org/3/trending/movie/day?api_key=fac36845d9f7873a94c26906e62793ef


import { getMovie } from "components/GetMovie/getMovie";
import { useEffect, useState } from "react";

const Home = () => {
const [movies, setMovies] = useState('');
useEffect(()=>{
  getMovie().then(resp => setMovies(resp.results))
},[]);
console.log(movies)
  return <>
  <div>Home</div>
  <ul>
    {movies.map(({title, id}) => <li key={id}><h3>{title}</h3></li>)}
  </ul>
  </>
};

export default Home;

