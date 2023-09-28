import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <h1>ZIZI</h1>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "pending"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "pending"
          }
        >
          About me
        </NavLink>
        <NavLink
          to={"/skills"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "pending"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "pending"
          }
        >
          Contact me
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
