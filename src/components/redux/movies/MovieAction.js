import axios from 'axios'

import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from "./MovieTypes";


export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies
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
        dispatch(fetchMoviesRequest)
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0451e553a464ab7929fee2e705dab05e')
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

export const fetchMovie = (id) => {
  //returns a function
  return (dispatch) => {
      dispatch(fetchMoviesRequest)
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0451e553a464ab7929fee2e705dab05e`)
      .then(response => {
          const movie = response.data
          console.log(movie); 
          dispatch(fetchMoviesSuccess(movie))
      })
      .catch(error => {
          const errorMsg = error.message
          dispatch(fetchMoviesFailure(errorMsg))
      })
  }
}