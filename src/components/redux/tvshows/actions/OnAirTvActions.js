import axios from 'axios'

import {
  FETCH_AIRTVSHOWS_FAILURE,
  FETCH_AIRTVSHOWS_REQUEST,
  FETCH_AIRTVSHOWS_SUCCESS,
} from "../Tvtypes";


export const fetchTvshowsRequest = () => {
  return {
    type: FETCH_AIRTVSHOWS_REQUEST,
  };
};

export const fetchTvshowsSuccess = (tvshows) => {
  return {
    type: FETCH_AIRTVSHOWS_SUCCESS,
    payload: tvshows
  };
};

export const fetchTvshowsFailure = (error) => {
  return {
    type: FETCH_AIRTVSHOWS_FAILURE,
    payload: error,
  };
};

export const fetchAirTvShow = () => {
    //returns a function
    return (dispatch) => {
        dispatch(fetchTvshowsRequest)
        axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=0451e553a464ab7929fee2e705dab05e')
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