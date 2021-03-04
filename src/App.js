import { Provider } from "react-redux";
import Allmovies from "./pages/AllMovies";
import Navbar from "./components/NavBar";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alltvshows from "./pages/AllTvShows";
import Moviedetail from "./pages/MovieDetail";
import Footer from "./components/Footer";
import Tvdetails from "./pages/TvDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Allmovies}></Route>
          <Route path="/tvshows" component={Alltvshows}></Route>
          <Route path="/tvshow/:id" component={Tvdetails}></Route>
          <Route path="/:id" component={Moviedetail}></Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
