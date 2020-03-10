import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ContentBlog from "./Components/Blog";
import Code from "./Components/Blog";
import CraftHouse from "./Components/Crafthouse";
import Ux from "./Components/UX";
import Landing from "./Components/Landing";
import home from "./Assets/icons/home.svg";
import book from "./Assets/icons/book.svg";
import rocket from "./Assets/icons/rocket.svg";
import pen from "./Assets/icons/pen.svg";
import code from "./Assets/icons/code.svg";
import downLeft from "./Assets/icons/downLeft.svg";

function App() {
  const whatisClicked = event => {
    const selecName = event.target.className;
    console.log(selecName);
  };
  const menuposition =null
  const menuPos = event => {
    
  }
  return (
    <BrowserRouter>
      <div className='App' onClick={e => whatisClicked(e)}>
        <div className={menuposition ? 'hidden':'ShowSideMenu'  }>
          <ul className='menu'>
            <li className='rectangle'>
              <Link to='/'>
                <img className='icon' src={home} />
                Home
              </Link>
            </li>
            <li className='rectangle'>
              <Link to='/Blog'>
                <img className='icon' src={book} />
                Blog
              </Link>
            </li>
            <li className='rectangle'>
              <Link to='/UX'>
                <img className='icon' src={pen} />
                UX
              </Link>
            </li>
            <li className='rectangle'>
              <Link to='/Code'>
                <img className='icon' src={code} />
                Code
              </Link>
            </li>
            <li className='rectangle'>
              <Link to='/cRaFtHouse'>
                <img className='icon' src={rocket} />
                cRaFtHouse
              </Link>
            </li>
          </ul>
          <button className='menu-button' onClick={e => menuPos(e)}>
            <img className='show' src={downLeft} />
          </button>
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
