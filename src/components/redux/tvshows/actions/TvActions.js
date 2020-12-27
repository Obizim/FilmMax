import axios from 'axios'

import {
  FETCH_PTVSHOWS_FAILURE,
  FETCH_PTVSHOWS_REQUEST,
  FETCH_PTVSHOWS_SUCCESS,
} from "../Tvtypes";


export const fetchTvshowsRequest = () => {
  return {
    type: FETCH_PTVSHOWS_REQUEST,
  };
};

export const fetchTvshowsSuccess = (tvshows) => {
  return {
    type: FETCH_PTVSHOWS_SUCCESS,
    payload: tvshows
  };
};

export const fetchTvshowsFailure = (error) => {
  return {
    type: FETCH_PTVSHOWS_FAILURE,
    payload: error,
  };
};

export const fetchTvShow = () => {
    //returns a function
    return (dispatch) => {
        dispatch(fetchTvshowsRequest)
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=0451e553a464ab7929fee2e705dab05e')
        .then(response => {
            const shows = response.data.results
            dispatch(fetchTvshowsSuccess(shows))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchTvshowsFailure(errorMsg))
        })
    }
}