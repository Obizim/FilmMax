import {
    FETCH_LTVSHOWS_FAILURE,
    FETCH_LTVSHOWS_REQUEST,
    FETCH_LTVSHOWS_SUCCESS,
  } from "../Tvtypes";
  
  const initialState = {
    loading: false,
    tvshows: [],
    error: ""
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_LTVSHOWS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_LTVSHOWS_SUCCESS:
        return {
          loading: false,
          tvshows: action.payload,
          error: "",
        };
      case FETCH_LTVSHOWS_FAILURE:
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
  