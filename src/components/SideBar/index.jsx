import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../actions";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  return (
    <>
    {/* Left Panel */}
  <aside id="left-panel" className="left-panel">
    <nav className="navbar navbar-expand-sm navbar-default">
      <div className="navbar-header">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars" />
        </button>
        <Link to="/" className="navbar-brand" href="/"><img src="/logov2.png" alt="Logo" width={50} /></Link>
        <a className="navbar-brand hidden" href="./"><img src="/logov2.png" alt="Logo" /></a>
      </div>
      <div id="main-menu" className="main-menu collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/"> <i className="menu-icon fa fa-dashboard" />Dashboard </Link>
          </li>
          {/* <h3 className="menu-title">UI elements</h3> */}
         
          {/* <li className="menu-item-has-children dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table" />Tables</a>
            <ul className="sub-menu children dropdown-menu">
              <li><i className="fa fa-table" /><a href="tables-basic.html">Basic Table</a></li>
              <li><i className="fa fa-table" /><a href="tables-data.html">Data Table</a></li>
            </ul>
          </li> */}
          <li>
            <Link to="/users/list"> <i className=" menu-icon ti-user"></i>Quản lí khách hàng </Link>
          </li>
          
          <li>
            <Link to="/brands/list"> <i className="menu-icon ti-widget" />Quản lí thương hiệu </Link>
          </li>
          <li>
            <Link to="/categories/list"> <i className="menu-icon ti-list" />Quản lí danh mục </Link>
          </li>
          {/* <li>
            <Link to="/categories/list-sub-cate"> <i className="menu-icon ti-list-ol" />Quản lí danh mục con </Link>
          </li> */}
          <li>
            <Link to="/products/list"> <i className="menu-icon ti-package" />Quản lí sản phẩm </Link>
          </li>
          
          <li>
            <Link to="/orders/list"> <i className="menu-icon ti-notepad" />Quản lí đơn hàng </Link>
          </li>
          <li>
            <Link to="/vouchers/list"> <i className="menu-icon ti-ticket" />Quản lí voucher</Link>
          </li>
          <li>
            <Link to="/transporters/list"> <i className="menu-icon ti-list-ol" />Quản lí PT giao hàng</Link>
          </li>
          <li>
            <Link to="/payments/list"> <i className="menu-icon ti-credit-card" />Quản lí thanh toán</Link>
          </li>
          <li>
            <Link to="/feedbacks/list"> <i className="menu-icon ti-email" />Quản lí feedback</Link>
          </li>
          <li>
            <Link to="/slides/list"> <i className="menu-icon ti-desktop" />Quản lí Slide</Link>
          </li>

          <li className="menu-item-has-children active dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon ti-comment-alt" />Quản lí bài viết</a>
            <ul className="sub-menu children dropdown-menu">
              <li><i className="menu-icon fa fa-th" /><Link to= "/categoryArticles/list">Danh mục bài viết</Link></li>
              <li><i className="menu-icon fa fa-th" /><Link to= "/articles/list">Viết bài</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/change-pass"> <i className="menu-icon ti-lock" />Đổi mật khẩu</Link>
          </li>
          <li>
            <a href="/" onClick={() => dispatch(logout())}> <i className="menu-icon ti-angle-double-right" />Đăng xuất</a>
          </li>
          
          
         
        </ul>
      </div>{/* /.navbar-collapse */}
    </nav>
  </aside>{/* /#left-panel */}
    </>
  );
};

export default Sidebar;
