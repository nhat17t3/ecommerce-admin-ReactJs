import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className="main-header">
        {/* Logo */}
        <a href="#" className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini">
            <b>HLN</b>
          </span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg">
            <b>HLN Shop Admin</b>
          </span>
        </a>
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top" role="navigation">
          {/* Sidebar toggle button*/}
          <a
            href="#"
            className="sidebar-toggle"
            data-toggle="offcanvas"
            role="button"
          >
            <span className="sr-only"></span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
