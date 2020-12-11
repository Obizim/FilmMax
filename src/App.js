import { Provider } from "react-redux";
import Movies from "./components/Movies";
import Navbar from "./components/NavBar";
import store from "./components/redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Movies />
      </div>
    </Provider>
  );
}

export default App;
