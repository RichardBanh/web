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
  const [sandwich, showsand] = useState(false);


  return (
    <BrowserRouter>
      <div className="App" onClick={(e) => whatisClicked(e)}>
        <div
          className="sandwich"
        >
          <ul className="menu">
            <li className="rectangle">
              <Link to="/">
                <div className="shapeshifter play">
                  <img className="icon" src={home} />
                </div>
                <p className="visibility">Home</p>
              </Link>
            </li>
            <li className="rectangle">
              <Link to="/Blog">
                <div className="shapeshifter play">
                  <img className="icon" src={book} />
                </div>
                <p className="visibility">Blog</p>
              </Link>
            </li>
            <li className="rectangle">
              <Link to="/UX">
                <div className="shapeshifter play">
                  <img className="icon" src={pen} />
                </div>
                <p className="visibility">UX</p>
              </Link>
            </li>
            <li className="rectangle">
              <Link to="/Code">
                <div className="shapeshifter play">
                  <img className="icon" src={code} />
                </div>
                <p className="visibility">Code</p>
              </Link>
            </li>
            <li className="rectangle">
              <Link to="/cRaFtHouse">
                <div className="shapeshifter2 play2">
                  <img className="icon" src={rocket} />
                </div>
                <p className="visibility">cRaFtHouse</p>
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/code">
            <Code />
          </Route>
          <Route path="/blog">
            <ContentBlog />
          </Route>
          <Route path="/ux">
            <Ux />
          </Route>
          <Route path="/crafthouse">
            <CraftHouse />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
