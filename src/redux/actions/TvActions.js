import axios from "axios";

import {
  FETCH_TVSHOWS_FAILURE,
  FETCH_TVSHOWS_REQUEST,
  FETCH_TVSHOWS_SUCCESS,
} from "../Types";
import { APIKEY } from "../Types";

export const fetchTvshowsRequest = () => {
  return {
    type: FETCH_TVSHOWS_REQUEST,
  };
};

export const fetchTvshowsSuccess = (tvshows) => {
  return {
    type: FETCH_TVSHOWS_SUCCESS,
    payload: tvshows,
  };
};

export const fetchTvshowsFailure = (error) => {
  return {
    type: FETCH_TVSHOWS_FAILURE,
    payload: error,
  };
};

export const fetchTvShow = () => {
  //returns a function
  return (dispatch) => {
    dispatch(fetchTvshowsRequest());
    let onair = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${APIKEY}`;
    let popular = `https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}`;
    let latest = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${APIKEY}`;

    const requestOne = axios.get(onair);
    const requestTwo = axios.get(popular);
    const requestThree = axios.get(latest);

    axios
      .all([requestOne, requestTwo, requestThree])
      .then((response) => {
        const tvshows = response;
        dispatch(fetchTvshowsSuccess(tvshows));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTvshowsFailure(errorMsg));
      });
  };
};
