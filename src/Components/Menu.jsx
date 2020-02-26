import React, { Component } from "react";
import Link from "react-router-dom";

class Menu extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default Menu;
