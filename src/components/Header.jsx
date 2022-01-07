import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div className="header__logo">
        <h1><Link to="/"><img src={require("../assets/images/plane.png")} alt="plane logo" />Travel Agency</Link></h1>
      </div>
      <div className="header__nav__burger--open">
        <img src={require("../assets/images/menu.png")} className="header__nav__burger--icon" alt="Menu" />
      </div>
      <nav className="header__nav">
        <div className="header__nav__burger--close">
          <img src={require("../assets/images/menu-close.png")} className="header__nav__burger--icon" alt="Menu close" />
        </div>
        <ul>
          <li><Link to="/" className="header__nav--active">Home</Link></li>
          <li><Link to="/destination">Destinations</Link>
            <ul className="header__sub-nav">
              <li><Link to="/destination">France</Link></li>
              <li><Link to="/destination">Russia</Link></li>
              <li><Link to="/destination">Australia</Link></li>
              <li><Link to="/destination">Japan</Link></li>
              <li><Link to="/destination">China</Link></li>
              <li><Link to="/destination">USA</Link></li>
              <li><Link to="/destination">Spain</Link></li>
              <li><Link to="/destination" className="header__sub-nav--see-more">See more</Link></li>
            </ul>
          </li>
          <li><Link to="/">Deals</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;