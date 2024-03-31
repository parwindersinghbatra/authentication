import React from "react";
import { NavLink } from "react-router-dom";
import './../Component/Navbar.css'

const Navbar = () => {
  return (
    <>
      <ul>
        <li><NavLink to="/">Login</NavLink></li>
        <li><NavLink to="/CreateAccount">Register</NavLink></li>  
      </ul>
    </>
  );
};

export default Navbar;
