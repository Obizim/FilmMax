import {
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from "../Types";

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
        error: "",
      };
    case FETCH_MOVIES_FAILURE:
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
