import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
// import logo from "../../../assets/img/logo.png";

function Header() {
  const location = useLocation().pathname;
  const [pendingClass, setPendingClass] = useState("pending");
  const [activeClass, setActiveClass] = useState("active");
  useEffect(() => {
    if (location !== "/") {
      setPendingClass("pending2");
      setActiveClass("active2");
    } else {
      setPendingClass("pending");
      setActiveClass("active");
    }
  }, [location]);
  return (
    <header>
      <h1>{/* <img src={logo} alt="" /> */}</h1>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? pendingClass : isActive ? activeClass : pendingClass
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending ? pendingClass : isActive ? activeClass : pendingClass
          }
        >
          About me
        </NavLink>
        <NavLink
          to={"/skills"}
          className={({ isActive, isPending }) =>
            isPending ? pendingClass : isActive ? activeClass : pendingClass
          }
        >
          Skills
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive, isPending }) =>
            isPending ? pendingClass : isActive ? activeClass : pendingClass
          }
        >
          Contact me
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
