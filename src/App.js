import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import AddUser from "./pages/AddUser";
import Login from "./pages/Login";
import UserList from "./pages/UserList";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login operation="Login" />
          </Route>
          <Route path="/userlist">
            <UserList />
          </Route>
          <Route path="/add_user">
            <AddUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
