import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
<header id="header" className="header" style={{padding: "22px 0" , }}>
      <div className="header-menu">
        <div className="col-sm-7">
          {/* <a id="menuToggle" className="menutoggle pull-left"><i className="fa fa fa-tasks" /></a> */}
        </div>
        <div className="col-sm-5">
          <div className="user-area dropdown float-right">
            {/* <button href="#" className="dropdown-toggle btn-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
              {/* <img className="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar" /> */}
              {/* Cá nhân */}.
            {/* </button> */}
            <div className="user-menu dropdown-menu">
              <a className="nav-link" href="#"><i className="fa fa- user" />My Profile</a>
              <a className="nav-link" href="#"><i className="fa fa- user" />Notifications <span className="count">13</span></a>
              <a className="nav-link" href="#"><i className="fa fa -cog" />Settings</a>
              <a className="nav-link" href="#"><i className="fa fa-power -off" />Logout</a>
            </div>
          </div>
        </div>
      </div>
    </header>{/* /header */}
    </>
  );
};

export default Header;
