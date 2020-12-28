import React from "react";
import Latest from "./TvShowsData/Latest";
import OnAirTvShows from "./TvShowsData/OnAirTvShows";
import PopularTvshows from "./TvShowsData/PopularTvshows";

function Alltvshows() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <section className="flex items-start lg:justify-end justify-center py-4 lg:py-4 lg:px-32 md:p-18 p-4">
        <input
          type="text"
          placeholder="🔎 Search for movies"
          className="pl-2 pr-32 py-2 rounded text-gray-100 bg-gray-900 shadow-lg"
        />
      </section>
      <OnAirTvShows />
      <PopularTvshows />
      <Latest />
    </div>
  );
}

export default Alltvshows;
