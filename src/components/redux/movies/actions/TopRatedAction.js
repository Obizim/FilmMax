import axios from 'axios'

import {
  FETCH_TMOVIES_FAILURE,
  FETCH_TMOVIES_REQUEST,
  FETCH_TMOVIES_SUCCESS,
} from "../MovieTypes";


export const fetchMoviesRequest = () => {
  return {
    type: FETCH_TMOVIES_REQUEST,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_TMOVIES_SUCCESS,
    payload: movies
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_TMOVIES_FAILURE,
    payload: error,
  };
};


export const fetchTopRated = () => {
  //returns a function
  return (dispatch) => {
      dispatch(fetchMoviesRequest)
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=0451e553a464ab7929fee2e705dab05e')
      .then(response => {
          const movies = response.data.results
          dispatch(fetchMoviesSuccess(movies))
      })
      .catch(error => {
          const errorMsg = error.message
          dispatch(fetchMoviesFailure(errorMsg))
      })
  }
}