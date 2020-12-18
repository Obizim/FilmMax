import { Provider } from "react-redux";
import Allmovies from "./components/AllMovies";
import Navbar from "./components/NavBar";
import store from "./components/redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alltvshows from "./components/AllTvShows";
import Moviedetail from "./components/moviesData/MovieDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" component={Allmovies}></Route>
            <Route exact path="/tvshows" component={Alltvshows}></Route>
            <Route exact path="/:id" component={Moviedetail}></Route>
          </div>
        </Provider>
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
