import React from "react";
import PopularMovies from "./moviesData/PopularMovies";
import TopRated from "./moviesData/TopRated";
import Upcoming from "./moviesData/Upcoming";

function Allmovies() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <section className="flex items-start lg:justify-end justify-center py-4 lg:py-4 lg:px-32 md:p-18 p-4">
        <input
          type="text"
          placeholder="🔎 Search for movies"
          className="pl-2 pr-32 py-2 rounded text-gray-100 bg-gray-900 shadow-lg"
        />
      </section>
      <PopularMovies />
      <TopRated />
      <Upcoming />
    </div>
  );
}
export default Allmovies;
