import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTvShow } from "../redux/tvshows/actions/TvActions";
import { url } from "../redux/tvshows/Tvtypes";
import { Link } from "react-router-dom";

function PopularTvShows({ tvList, loading, error, fetchTvShow }) {
  useEffect(() => {
    fetchTvShow();
  }, [fetchTvShow]);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2 className="h-screen text-center lg:text-xl text-base py-44 px-8">
      {error}. Check your Internet Connection
    </h2>
  ) : (
    <div className="lg:py-14">
      <h2 className="lg:text-4xl text-2xl py-8 px-4 lg:px-28 text-red-600 font-quicksand">
        Popular TvShows
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 lg:py-4 lg:px-28 md:p-18 p-4">
        {tvList &&
          tvList.map(({ id, name, poster_path }) => {
            const maxChar = 14;
            if (name.length > maxChar) {
              name = name.substring(0, maxChar) + " . . .";
            }
            return (
              <div key={id} className="font-quicksand">
                <img src={url + poster_path} alt={name} />
                <p className="lg:text-xl text-base mt-2 rounded">
                  <Link to={`/tvshow/${id}`}>{name}</Link>
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
    loading: state.populartvshows.loading,
    error: state.populartvshows.error,
    tvList: state.populartvshows.tvshows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTvShow: () => dispatch(fetchTvShow()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularTvShows);
