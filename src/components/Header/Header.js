import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              My Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/journal/new" exact>
              New Post
            </NavLink>
          </li>
          {/* <li>
          <NavLink></NavLink>
        </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
