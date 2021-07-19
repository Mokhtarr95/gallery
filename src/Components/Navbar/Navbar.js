import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Search from "../Search/Search";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} size="1.3rem" />
        </Link>
        <ul className="navbar-ul">
          <li className="home">
            <Link to="/">Home</Link>
          </li>
          <Search />
          <li className="saves">
            <Link to="/cart">Saves</Link>
          </li>
        </ul>
      </nav>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose size="1.5rem" />
            </Link>
          </li>
          <h2>Categories</h2>
          <li className="nav-text">
            <Link to="/fashion">
              <span>Fashion</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/food">
              <span>Food</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/nature">
              <span>Nature</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/portrait">
              <span>Portrait</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/wedding">
              <span>Wedding</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
