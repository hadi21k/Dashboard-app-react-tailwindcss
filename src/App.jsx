import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import SideBar from "./Components/SideBar/SideBar";
import SignUp from "./Components/SignPage/SignUp";
import SignIn from "./Components/SignPage/SignIn";
import Tables from "./Components/Tables/Tables";
const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/tables">
          <Tables />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
