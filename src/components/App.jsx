
import Home from "pages/home";
import Movies from "pages/movies";

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

export const App = () => {
  return (
    <div>
      React homework template
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="*" element={<h1>Page not found. Error 404</h1>}/>
        </Route>
      </Routes>
    </div>
  );
};
  