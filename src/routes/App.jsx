import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
import { Movie } from "@pages/Movie";
import { SearchMovies } from "@pages/SearchMovies";
import { SearchCategories } from "@pages/SearchCategories";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="movie-app/" element={<Home />} />
        <Route path="movie-app/movie/:id" element={<Movie />} />
        <Route
          path="movie-app/search/movies/:search"
          element={<SearchMovies />}
        />
        <Route
          path="movie-app/category/:name/:id"
          element={<SearchCategories />}
        />
        <Route path="movie-app/trends/:date" element={<SearchCategories />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
