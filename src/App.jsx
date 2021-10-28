import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import SideBar from "./Components/SideBar/SideBar";
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
      </Switch>
    </div>
  );
};

export default App;
