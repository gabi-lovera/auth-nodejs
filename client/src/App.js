import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbarr from "./components/Navbarr";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Privado from "./pages/Privado";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { useState } from "react";
import { AuthContext } from "./helpers/AuthContext";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
    <Router>
      <Navbarr />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/seccion">
          <Privado />
        </Route>
      </Switch>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
