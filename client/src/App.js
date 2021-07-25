import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbarr from "./components/Navbarr";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navbarr />
      <Switch>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
