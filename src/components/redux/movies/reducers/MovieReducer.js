import {
  FETCH_PMOVIES_FAILURE,
  FETCH_PMOVIES_REQUEST,
  FETCH_PMOVIES_SUCCESS,
} from "../MovieTypes";

const initialState = {
  loading: false,
  movies: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PMOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PMOVIES_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
        error: "",
      };
    case FETCH_PMOVIES_FAILURE:
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
