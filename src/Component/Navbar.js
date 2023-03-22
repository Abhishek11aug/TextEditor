import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const propTypes = {AppName:String,Theme:String};
const defaultProps = {AppName:"Text-Editor",Theme:"light"};

const Navbar = (props) => {
  let NavTheme = props.Theme==="Dark" ? "success" : "primary";
  let Switch_Theme = props.Theme==="Dark" ? "light" : "dark";
  let ContentTheme = props.Theme==="Dark" ? "black" : "white";
  return (
    <nav className= {`navbar navbar-expand-lg bg-${NavTheme}`} >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{color:ContentTheme}}>
          {props.AppName}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-0 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{color:ContentTheme}}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about" style={{color:ContentTheme}}>
                About
              </Link>
            </li>
          </ul>
            <div class="form-check form-switch">
  <input class={`form-check-input bg-${Switch_Theme}`} type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.ToggleTheme} />
  <label class="form-check-label" for="flexSwitchCheckDefault">Toggle Theme</label>
</div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
// #endregion

export default Navbar;
