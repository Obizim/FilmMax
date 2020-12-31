import axios from "axios";
import React, { useState } from "react";
import Latest from "./TvShowsData/Latest";
import OnAirTvShows from "./TvShowsData/OnAirTvShows";
import PopularTvshows from "./TvShowsData/PopularTvshows";
import { Link } from "react-router-dom";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/tv?api_key=0451e553a464ab7929fee2e705dab05e&query="';
const url = "https://image.tmdb.org/t/p/w500";

function Alltvshows() {
  const [searchedShows, setSearchedShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function onhandleSubmit(e) {
    e.preventDefault();

    if (searchTerm) {
      axios.get(SEARCH_API + searchTerm).then((resp) => {
        const shows = resp.data.results;
        setSearchedShows(shows);
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
          className="flex items-start container lg:justify-end justify-center lg:px-32 px-10 lg:py-4 py-2"
        >
          <input
            type="text"
            placeholder="🔎 Search for tvshows"
            className="pl-2 pr-32 py-4 rounded text-gray-100 bg-gray-900 shadow-lg outline-none"
            onChange={onhandleSearch}
            value={searchTerm}
          />
        </form>
        <div className="relative flex container lg:justify-end justify-center lg:px-32 px-4 lg:py-4 py-2">
          <section className="absolute rounded bg-gray-900">
            {searchedShows.map(({ id, poster_path, original_name }) => (
              <Link to={`/tvshow/${id}`} key={id}>
                <div className="flex flex-row justify-between items-center border-b py-4 px-4 space-y-4 cursor-pointer hover:bg-gray-400 transition">
                  <img
                    src={url + poster_path}
                    alt="poster"
                    className="w-6 text-red-600"
                  />
                  <p>{original_name}</p>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </section>
      <OnAirTvShows />
      <PopularTvshows />
      <Latest />
    </div>
  );
}

export default Alltvshows;
