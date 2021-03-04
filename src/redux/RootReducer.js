import { combineReducers } from "redux";
import movies from "./reducers/MovieReducer";
import tvshows from "./reducers/TvReducers";

// import reducers
const rootReducer = combineReducers({
  movies: movies,
  tvshows: tvshows,
});

export default rootReducer;
