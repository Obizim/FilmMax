import { combineReducers } from 'redux'
import PopularMovies from './movies/reducers/MovieReducer'
import TopRated from './movies/reducers/TopRatedReducer'
import Upcoming from './movies/reducers/UpcomingReducer'



// import reducers

const rootReducer = combineReducers({
    popularMovies: PopularMovies,
    topRated: TopRated,
    upcoming: Upcoming
})

export default rootReducer