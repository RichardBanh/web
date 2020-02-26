import React from "react";
import Menu from "./Components/Menu";
import { Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Menu />

        <Switch>
          <Route path='/'>Splash Page</Route>
          <Route path=''></Route>
          <Route path=''></Route>
          <Route path=''></Route>
          <Route path=''></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
