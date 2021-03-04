import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/actions/MovieAction";
import MoviesCard from "../components/cards/MoviesCard";
import SearchCard from "../components/cards/SearchCard";
import SearchForm from "../components/SearchForm";
import Loading from "../components/Loading";
import { useOnClickOutside } from "../utilities";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=0451e553a464ab7929fee2e705dab05e&query="';

function Allmovies() {
  const ref = useRef();
  const titles = ["Popular Movies", "Top Rated Movies", "Upcoming Movies"];

  const loading = useSelector((state) => state.movies.loading);
  const movies = useSelector((state) => state.movies.movies);
  const error = useSelector((state) => state.movies.error);

  const dispatch = useDispatch();

  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useOnClickOutside(ref, () => setSearchedMovies([]));

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

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
    <div className="text-gray-900">
      <section className="flex flex-col justify-center items-end pt-4">
        <SearchForm
          searchTerm={searchTerm}
          onhandleSubmit={onhandleSubmit}
          onhandleSearch={onhandleSearch}
          placeholder={'🔎 Search for movies'}
        />
        <div ref={ref} className="relative w-full py-2">
          <SearchCard to={"/"} searchedMovies={searchedMovies} />
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
          movies &&
          movies.map((movies, index) => {
            const title = titles[index];
            return <MoviesCard key={index} title={title} movies={movies.data.results} />;
          })
        )}
      </section>
    </div>
  );
}
export default Allmovies;
