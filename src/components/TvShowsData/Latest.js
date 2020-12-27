import React, { useEffect } from "react";
import { connect } from "react-redux";
import {  fetchLatestTvShow } from "../redux/tvshows/actions/LatestAction";
import { url } from "../redux/tvshows/Tvtypes";
import { Link } from "react-router-dom";

function Latest({ tvList, loading, error,  fetchLatestTvShow }) {
  useEffect(() => {
    fetchLatestTvShow();
  }, [ fetchLatestTvShow]);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2 className="h-screen text-center text-2xl py-44 px-8">
      {error}. Check your Internet Connection
    </h2>
  ) : (
    <div className="lg:py-14">
      <h2 className="lg:text-4xl text-2xl py-8 px-4 lg:px-28 text-red-600 font-quicksand">
        Latest TvShows
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
                <p className="text-xl mt-2 rounded">
                  <Link to={`/${id}`}>{name}</Link>
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
    loading: state.latestShows.loading,
    error: state.latestShows.error,
    tvList: state.latestShows.tvshows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLatestTvShow: () => dispatch( fetchLatestTvShow()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Latest);
