import axios from 'axios'

import {
  FETCH_UMOVIES_FAILURE,
  FETCH_UMOVIES_REQUEST,
  FETCH_UMOVIES_SUCCESS,
} from "../MovieTypes";


export const fetchMoviesRequest = () => {
  return {
    type: FETCH_UMOVIES_REQUEST,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_UMOVIES_SUCCESS,
    payload: movies
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_UMOVIES_FAILURE,
    payload: error,
  };
};


export const fetchUpcoming = () => {
  //returns a function
  return (dispatch) => {
      dispatch(fetchMoviesRequest)
      axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=0451e553a464ab7929fee2e705dab05e')
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