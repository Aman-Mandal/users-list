import React from "react";
import classes from "./Navbar.module.css";

const Navbar = ({ onClick }) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>myLogo</div>
      <button className={classes.btn} onClick={onClick}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;
