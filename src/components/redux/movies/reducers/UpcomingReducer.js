import {
    FETCH_UMOVIES_FAILURE,
    FETCH_UMOVIES_REQUEST,
    FETCH_UMOVIES_SUCCESS,
  } from "../MovieTypes";
  
  const initialState = {
    loading: false,
    movies: [],
    error: ""
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_UMOVIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_UMOVIES_SUCCESS:
        return {
          loading: false,
          movies: action.payload,
          error: "",
        };
      case FETCH_UMOVIES_FAILURE:
        return {
          loading: false,
          movies: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  