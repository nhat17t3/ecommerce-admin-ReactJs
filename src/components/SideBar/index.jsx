import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar" style={{ height: "auto" }}>
          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu">
            {/* <li className="treeview">
        <a href="#">
          <i className="fa fa-dashboard" /> <span>Dashboard</span>{" "}
          <i className="fa fa-angle-left pull-right" />
        </a>
        <ul className="treeview-menu">
          <li>
            <a href="#">
              <i className="fa fa-circle-o" /> Dashboard v1
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-circle-o" /> Dashboard v2
            </a>
          </li>
        </ul>
      </li> */}
            <li>
              <Link to="/">
                <i className=" fa fa-dashboard"></i>
                <span>Trang chủ</span>{" "}
              </Link>
            </li>

            <li>
              <Link to="/users/list">
                <i className=" fa fa-users"></i>
                <span>Quản lí khách hàng</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/categories/list">
                <i className="fa fa-list" />
                <span>Quản lí danh mục</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/products/list">
                <i class="fa fa-suitcase"></i>
                <span>Quản lí sản phẩm</span>{" "}
              </Link>
            </li>

            <li>
              <Link to="/orders/list">
                <i className="fa fa-shopping-cart" />
                <span>Quản lí đơn hàng</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/payments/list">
                <i className="fa fa-credit-card" />
                <span>Quản lí thanh toán</span>
              </Link>
            </li>
            <li>
              <Link to="/categoty-articles/list">
                <i className="fa fa-list" />
                <span>
                  Quản lí danh mục bài viết<table></table>
                </span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/articles/list">
                <i class="fa fa-suitcase"></i>
                <span>Quản lí bài viết</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/change-pass">
                <i className="fa fa-key" />
                <span>Đổi mật khẩu</span>
              </Link>
            </li>
            <li>
              <a href="/" onClick={() => dispatch(logout())}>
                <i className="fa fa-sign-in" />
                <span>Đăng xuất</span>
              </a>
            </li>
            <li>
              <Link to="">
                <i className="fa fa-book" />
                <span>Documentation</span>
              </Link>
            </li>
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
    </>
  );
};

export default Sidebar;
