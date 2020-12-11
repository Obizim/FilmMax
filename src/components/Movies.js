import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "./redux/movies/MovieAction";
import { url } from './redux/movies/MovieTypes'

function Usercontainer({ movieList, loading, error, fetchMovies }) {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <h2>UserList</h2>
      <div>
        {movieList &&
          movieList.map((movie) => (
            <div key={movie.id}>
              <img src={url + movie.poster_path} alt=""/>
              <p>{movie.title}</p>
              <p>{movie.vote_count}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    movieList: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Usercontainer);
