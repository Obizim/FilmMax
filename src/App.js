import { Provider } from "react-redux";
import Allmovies from "./components/AllMovies";
import Navbar from "./components/NavBar";
import store from "./components/redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alltvshows from "./components/AllTvShows";
import Moviedetail from "./components/moviesData/MovieDetail";
import Footer from "./components/Footer";
import Actors from "./Actors";
import Tvdetails from "./components/TvShowsData/TvDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Allmovies}></Route>
          <Route path="/tvshows" component={Alltvshows}></Route>
          {/* <Route path="/actors" component={Actors}></Route> */}
          <Route path="/tvshow/:id" component={Tvdetails}></Route>
          <Route path="/:id" component={Moviedetail}></Route>
          
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
