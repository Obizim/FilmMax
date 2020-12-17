import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUpcoming } from "../redux/movies/actions//UpcomingAction";
import { url } from "../redux/movies/MovieTypes";
import { Link } from "react-router-dom";

function Upcoming({ movieList, loading, error, fetchUpcoming }) {
  useEffect(() => {
    fetchUpcoming();
  }, [fetchUpcoming]);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2 className="h-screen text-center text-2xl py-44 px-8">
      {error}. Check your Internet Connection
    </h2>
  ) : (
    <div className="lg:py-14">
      <h2 className="lg:text-4xl text-2xl py-8 px-4 lg:px-28 text-red-600 font-quicksand">
        Upcoming Movies
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 lg:py-4 lg:px-28 md:p-18 p-4">
        {movieList &&
          movieList.map(({ id, title, poster_path }) => {
            const maxChar = 14;
            if (title.length > maxChar) {
              title = title.substring(0, maxChar) + " . . .";
            }
            return (
              <div key={id} className="font-quicksand">
                <img src={url + poster_path} alt={title} />
                <p className="text-xl mt-2 rounded">
                  <Link to={`/${id}`}>{title}</Link>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.upcoming.loading,
    error: state.upcoming.error,
    movieList: state.upcoming.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUpcoming: () => dispatch(fetchUpcoming()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);
