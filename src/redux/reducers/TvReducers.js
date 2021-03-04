import {
  FETCH_TVSHOWS_FAILURE,
  FETCH_TVSHOWS_REQUEST,
  FETCH_TVSHOWS_SUCCESS,
} from "../Types";

const initialState = {
  loading: false,
  tvshows: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TVSHOWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TVSHOWS_SUCCESS:
      return {
        loading: false,
        tvshows: action.payload,
        error: "",
      };
    case FETCH_TVSHOWS_FAILURE:
      return {
        loading: false,
        tvshows: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
