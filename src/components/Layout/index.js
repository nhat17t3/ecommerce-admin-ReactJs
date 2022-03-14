import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../SideBar";

const Layout = (props) => {
  return (
    <>
      <div>
        <Sidebar />
        <div id="right-panel" className="right-panel" style={{width : "83%"}}>
          <Header />

          {/* <div className="breadcrumbs">
      <div className="col-sm-4">
        <div className="page-header float-left">
          <div className="page-title">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="page-header float-right">
          <div className="page-title">
            <ol className="breadcrumb text-right">
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Forms</a></li>
              <li className="active">Basic</li>
            </ol>
          </div>
        </div>
      </div>
    </div> */}
     <div className="content mt-3">
      <div className="animated fadeIn">
          {props.children}
        </div>
        </div>
        </div>
{/* 
        <footer className="py-4 bg-light mt-auto">
          <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">Copyright © Your Website 2021</div>
              <div>
                <a href="#">Privacy Policy</a>·
                <a href="#">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
};

export default Layout;
