import axios from "axios";

import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from "../Types";

import { APIKEY } from "../Types";

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchMovies = () => {
  //returns a function
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
    let popular = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}`;
    let topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}`;
    let upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}`;

    const requestOne = axios.get(popular);
    const requestTwo = axios.get(topRated);
    const requestThree = axios.get(upcoming);

    axios
      .all([requestOne, requestTwo, requestThree])
      .then((response) => {
        const movies = response;
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchMoviesFailure(errorMsg));
      });
  };
};
