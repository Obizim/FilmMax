import React from "react";
import PopularMovies from "./moviesData/PopularMovies";
import TopRated from "./moviesData/TopRated";
import Upcoming from "./moviesData/Upcoming";

function Allmovies() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <PopularMovies />
      <TopRated />
      <Upcoming />
    </div>
  );
}
export default Allmovies;
