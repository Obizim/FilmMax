import {
    FETCH_AIRTVSHOWS_FAILURE,
    FETCH_AIRTVSHOWS_REQUEST,
    FETCH_AIRTVSHOWS_SUCCESS,
  } from "../Tvtypes";
  
  const initialState = {
    loading: false,
    tvshows: [],
    error: ""
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_AIRTVSHOWS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_AIRTVSHOWS_SUCCESS:
        return {
          loading: false,
          tvshows: action.payload,
          error: "",
        };
      case FETCH_AIRTVSHOWS_FAILURE:
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
  