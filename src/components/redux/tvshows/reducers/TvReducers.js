import {
  FETCH_PTVSHOWS_FAILURE,
  FETCH_PTVSHOWS_REQUEST,
  FETCH_PTVSHOWS_SUCCESS,
} from "../Tvtypes";

const initialState = {
  loading: false,
  tvshows: [],
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PTVSHOWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PTVSHOWS_SUCCESS:
      return {
        loading: false,
        tvshows: action.payload,
        error: "",
      };
    case FETCH_PTVSHOWS_FAILURE:
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
