
import Home from "pages/home";
import Movies from "pages/movies";

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import MovieDetails from "./MovieDetails/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

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
      {/* <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieId />}>
          <Route path="/movies/:movieId/cast" element={<Cast />}/>
          <Route path="/movies/:movieId/reviews" element={<Reviews />}/>
        </Route>
        <Route path="*" element={<h1>Page not found. Error 404</h1>}/>
    </Route>
      </Routes> */}
    </div>
  );
};
  