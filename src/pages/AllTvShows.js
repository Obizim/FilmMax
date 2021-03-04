import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvShow } from "../redux/actions/TvActions";
import TvshowsCard from "../components/cards/TvshowsCard";
import SearchCard from "../components/cards/SearchCard";
import SearchForm from "../components/SearchForm";
import Loading from "../components/Loading";
import { useOnClickOutside } from "../utilities";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/tv?api_key=0451e553a464ab7929fee2e705dab05e&query="';

function Alltvshows() {
  const ref = useRef();
  const titles = ["TvShows on Air", "Latest TvShows", "Popular TvShows"];

  const loading = useSelector((state) => state.tvshows.loading);
  const tvshows = useSelector((state) => state.tvshows.tvshows);
  const error = useSelector((state) => state.tvshows.error);

  const dispatch = useDispatch();

  const [searchedShows, setSearchedShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useOnClickOutside(ref, () => setSearchedShows([]));

  useEffect(() => {
    dispatch(fetchTvShow());
  }, [dispatch]);

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
    <div className="text-gray-900">
      <section className="flex flex-col justify-center items-end pt-4">
        <SearchForm
          searchTerm={searchTerm}
          onhandleSubmit={onhandleSubmit}
          onhandleSearch={onhandleSearch}
          placeholder={'🔎 Search for tvshows'}
        />
        <div ref={ref} className="relative w-full py-2">
          <SearchCard to={"/tvshow/"} searchedMovies={searchedShows} />
        </div>
      </section>

      <section>
        {loading ? (
          <div className="w-full h-screen flex items-center justify-center">
            <Loading />
          </div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          tvshows &&
          tvshows.map((tvshows, index) => {
            const title = titles[index];
            return <TvshowsCard key={index} title={title} tvshows={tvshows.data.results} />;
          })
        )}
      </section>
    </div>
  );
}

export default Alltvshows;
