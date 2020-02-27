import React from "react";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import ContentBlog from "./Components/Blog";
import Code from "./Components/Blog";
import CraftHouse from "./Components/Crafthouse";
import Ux from "./Components/UX";
import Landing from "./Components/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='sideMenu'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Blog'>Blog</Link>
            </li>
            <li>
              <Link to='/UX'>UX</Link>
            </li>
            <li>
              <Link to='/Code'>Code</Link>
            </li>
            <li>
              <Link to='/cRaFtHouse'>cRaFtHouse</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/code'>
            <Code />
          </Route>
          <Route path='/blog'>
            <ContentBlog />
          </Route>
          <Route path='/ux'>
            <Ux />
          </Route>
          <Route path='/crafthouse'>
            <CraftHouse />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
