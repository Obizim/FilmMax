import { combineReducers } from 'redux'
import PopularMovies from './movies/reducers/MovieReducer'
import TopRated from './movies/reducers/TopRatedReducer'
import Upcoming from './movies/reducers/UpcomingReducer'
import PopularTvShows from './tvshows/reducers/TvReducers'
import AiringTvShows from './tvshows/reducers/OnAirTvReducer'
import LatestShows from './tvshows/reducers/LatestReducer'

// import reducers

const rootReducer = combineReducers({
    popularMovies: PopularMovies,
    topRated: TopRated,
    upcoming: Upcoming,
    populartvshows: PopularTvShows,
    airingToday: AiringTvShows,
    latestShows: LatestShows
})

export default rootReducer