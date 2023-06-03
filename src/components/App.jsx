import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";
// import Home from "pages/home";
// import Movies from "pages/movies";
// import MovieDetails from "./MovieDetails/MovieDetails";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";

const Home = lazy(()=>import('../pages/home'));
const Movies = lazy(()=>import('../pages/movies'));
const MovieDetails = lazy(()=>import('../components/MovieDetails/MovieDetails'));
const Cast = lazy(()=>import('../components/Cast/Cast'));
const Reviews = lazy(()=>import('../components/Reviews/Reviews'))

export const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
        </Route>
        <Route path="*" element={<h1>Page not found. Error 404</h1>}/>
    </Route>
      </Routes>
    </div>
  );
};
  