import React, { useState } from "react";
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
import outRight from "./Assets/icons/outright.svg";

function App() {
  //maybe unnecessary
  const whatisClicked = (event) => {
    const selecName = event.target.className;
    console.log(selecName);
  };
  const [visible, setvisible] = useState(true);
  const [transit, settransit] = useState(false);
  const [hidden, sethidden] = useState(false);

  const menuPos = (event) => {
    //transition period first then hidden stage // think animation
    setTimeout(function () {
      settransit(!transit);
      setvisible(!visible);
      sethidden(!hidden);
    }, 3000);
    
    settransit(!transit);
  };

  return (
    <BrowserRouter>
      <div className='App' onClick={(e) => whatisClicked(e)}>
        <div
          className={`${visible ? "ShowSideMenu" : ""} ${
            transit ? "transit" : ""
          } ${hidden ? "hidden" : ""}`}
        >
          <ul className='menu'>
            <li className='rectangle'>
              <Link to='/'>
                <img className='icon' src={home} />
                <p>Home</p>
              </Link>
            </li>
            <li className='rectangle'>
              <Link to='/Blog'>
                <img className='icon' src={book} />
                <p>Blog</p>
              </Link>
            </li>
            <li className='rectangle'>
              <Link to='/UX'>
                <img className='icon' src={pen} />
                <p>UX</p>
              </Link>
            </li>
            <li className='rectangle'>
              <Link to='/Code'>
                <img className='icon' src={code} />
                <p>Code</p>
              </Link>
            </li>
            <li className='rectangle'>
              <Link to='/cRaFtHouse'>
                <img className='icon' src={rocket} />
                <p>cRaFtHouse</p>
              </Link>
            </li>
          </ul>
          <button className='menu-button' onClick={(e) => menuPos(e)}>
            <img className='out-right' src={downLeft} />
          </button>
        </div>
        <div className={"hidden"}>
          <p>Sandwich</p>
          <button className='menu-button' onClick={(e) => menuPos(e)}>
            <img className='out-right' src={outRight} />
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
