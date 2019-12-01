import React from "react";
import './header.scss';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <NavLink exact className="header_link" to="/">
        Galler<b className="header_link-bold">easy</b>
      </NavLink> <span className="header_separator"></span>
      <NavLink exact className="header_link header_link-search" activeClassName="header_link-active" to="/search">
        Search
      </NavLink>
      <NavLink className="header_link header_link-favorites" activeClassName="header_link-active" to="/fav">
        Favorites
      </NavLink>
    </nav>
  );
}
export default Header;

