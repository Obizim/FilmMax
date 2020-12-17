import {
    FETCH_TMOVIES_FAILURE,
    FETCH_TMOVIES_REQUEST,
    FETCH_TMOVIES_SUCCESS,
  } from "../MovieTypes";
  
  const initialState = {
    loading: false,
    movies: [],
    error: ""
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TMOVIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_TMOVIES_SUCCESS:
        return {
          loading: false,
          movies: action.payload,
          error: "",
        };
      case FETCH_TMOVIES_FAILURE:
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
  