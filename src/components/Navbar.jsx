import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Navbar.module.css";
import Account from "./Account";

export default function Navbar() {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/" className={classes.brand}>
              <img src={logo} alt="JavaScript Quiz" />
              <h3>JavaScript Quiz</h3>
            </Link>
          </li>
        </ul>
        <Account />
      </nav>
    </>
  );
}
