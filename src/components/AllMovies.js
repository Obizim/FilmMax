import axios from "axios";
import React, { useState } from "react";
import PopularMovies from "./moviesData/PopularMovies";
import TopRated from "./moviesData/TopRated";
import Upcoming from "./moviesData/Upcoming";
import { Link } from "react-router-dom";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=0451e553a464ab7929fee2e705dab05e&query="';
const url = "https://image.tmdb.org/t/p/w500";

function Allmovies() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function onhandleSubmit(e) {
    e.preventDefault();

    if (searchTerm) {
      axios.get(SEARCH_API + searchTerm).then((resp) => {
        const movies = resp.data.results;
        setSearchedMovies(movies);
        setSearchTerm("");
      });
    }
  }

  function onhandleSearch(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <div className="bg-gray-900 text-gray-100">
      <section className="flex flex-col justify-center items-center">
        <form
          onSubmit={onhandleSubmit}
          className="flex items-start container lg:justify-end justify-center lg:px-32 px-4 lg:py-4 py-2"
        >
          <input
            type="text"
            placeholder="🔎 Search for movies"
            className="pl-2 pr-32 py-4 rounded text-gray-100 bg-gray-900 shadow-lg focus:outline-gray-800 focus:ring-4"
            onChange={onhandleSearch}
            value={searchTerm}
          />
        </form>
        <div className="relative flex container lg:justify-end justify-center lg:px-32 px-4 lg:py-4 py-2">
          <section className="absolute rounded bg-gray-900">
            {searchedMovies.map(({ id, poster_path, title }) => (
              <Link to={`/${id}`} key={id}>
                <div className="flex flex-row justify-between items-center border-b py-4 px-4 space-y-4 cursor-pointer hover:bg-gray-400 transition">
                  <img
                    src={url + poster_path}
                    alt="poster"
                    className="w-6 text-red-600"
                  />
                  <p>{title}</p>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </section>
      <PopularMovies />
      <TopRated />
      <Upcoming />
    </div>
  );
}
export default Allmovies;
