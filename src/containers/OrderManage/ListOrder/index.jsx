import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  deleteOrder,
  filterOrderByStatus,
  getListOrderByPage,
  searchListOrderByName,
} from "../../../actions";
import Layout from "../../../components/Layout";
import orderReducers from "../../../reducers/order.reducers";
import OrderItem from "../OrderItem";

ListOrder.propTypes = {};

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ListOrder(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [searchFeild, setSearchFeild] = useState("");
  const [reRender, setReRender] = useState(true);
  const [addSearch, setAddSearch] = useState(true);
  const [orderStatus, setOrderStatus] = useState("5");

  let query = useQuery();

  const [currentPage, setCurrentPage] = useState(
    Number(query.get("page")) || 1
  );
  const limit = 5;

  useEffect(() => {
    // if (searchFeild === ""){

    //   if(orderStatus!="all"){
    //     dispatch(filterOrderByStatus(Number(orderStatus),5,currentPage - 1))
    //   }
    //   else dispatch(getListOrderByPage(limit, currentPage - 1));
    // }      
    // else {
    //   setOrderStatus("all");
    //   dispatch(searchListOrderByName(searchFeild, limit, currentPage - 1));
    // }

    dispatch(searchListOrderByName(searchFeild,orderStatus, limit, currentPage - 1));
    
  }, [currentPage, orderStatus, addSearch]);

  const orders = useSelector((state) => state.order.listOrder);
  const count = useSelector((state) => state.order.count);
  var countPage = Math.ceil(count / limit);

  const handlePageChange = (event, pageNumber) => {
    console.log(pageNumber, "page");
    setCurrentPage(pageNumber);
    history.push(`?page=${pageNumber}`);
  };

  //  const checkfilter = (subject, grade, address, order) => {
  //   let checka = false;
  //   let checkb = false;
  //   let checkc = false;
  //   if (subject == "All") checka = true;
  //   else checka = order.subject === subject;
  //   if (grade == "All") checkb = true;
  //   else checkb = order.grade === grade;
  //   if (address == "All") checkc = true;
  //   else checkc = order.address.toLowerCase().includes(address.toLowerCase());
  //   return checka && checkb && checkc;
  // };

  // const handlefillter = (e) => {
  //   console.log(subject, grade, address);

  //   const listfillter = orders.filter((tutor) =>
  //     checkfilter(subject, grade, address, tutor)
  //   );
  //   console.log(listfillter);
  //   setListorder(listfillter);
  // };

  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/orders/edit/${item.id}`;
    // const editUrl = `/orders/add`;

    history.push(editUrl);
  };

  const handleViewClick = (item) => {
    console.log("View: ", item);
    const viewUrl = `/orders/${item.id}`;
    history.push(viewUrl);
  };

  const handleDeleteClick = async (item) => {
    console.log("delete: ", item);
    await dispatch(deleteOrder(item));
    await dispatch(getListOrderByPage(limit, currentPage - 1));
    setReRender(!reRender);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    // console.log(searchFeild, "search");
    // if(searchFeild.trim()!= ""){
    //   // history.push(`?search=${searchFeild}&page=${1}`); 
    //   dispatch(searchListOrderByName(searchFeild, limit, 0));

    // } 
    // else {
    //   dispatch(getListOrderByPage(limit, 0));
    //   history.push('/orders/list')
    // }

    setAddSearch(!addSearch);
  };
  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body ">
                  <h1 className="card-title text-center">Quản lí đơn hàng</h1>
                  <div
                    className="navbar-menu-wrapper d-flex align-items-center"
                    style={{ justifyContent: "space-between" }}
                  >
                    {/* <Link to={"/orders/add"} className="btn btn-info">
                      Thêm bài viết
                    </Link> */}

                    <ul class="navbar-nav navbar-nav-right col-3">
                      <li class="nav-item nav-search d-none d-md-block mr-0">
                        <form class="input-group" onSubmit={handleSearch}>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search..."
                            aria-label="search"
                            aria-describedby="search"
                            name="searchFeild"
                            id="searchFeild"
                            value={searchFeild}
                            onChange={(e) => setSearchFeild(e.target.value)}
                          />
                          <div className="input-group-append">
                            <button
                              className="btn  btn-primary"
                              type="submit"
                            >
                              Search
                            </button>
                          </div>
                        </form>
                      </li>
                    </ul>
                    <div className="col-6">

                    </div>
                    <div className="col-3">
                    <select
                        className="form-control"
                        name="orderStatus"
                        onChange={(e) =>{
                          setOrderStatus(e.target.value);
                          // if(e.target.value == "5") dispatch(getListOrderByPage(limit, currentPage - 1));
                          // else dispatch(filterOrderByStatus(Number(e.target.value),5,currentPage - 1))
                        } }
                        value={orderStatus}
                      >
                        <option value={"5"}>--All--</option>
                        <option value={"0"}>Chờ xác nhận</option>;
                        <option value={"1"}>Chờ giao hàng</option>;
                        <option value={"2"}>Đang giao hàng</option>;
                        <option value={"3"}>Thành công</option>;
                        <option value={"4"}>Đã hủy</option>;
                        
                      </select>
                    </div>
                    
                  </div>
                  <div className="table-responsive pt-3">
                    <table className="table table-striped project-orders-table table-bordered">
                      <thead className="thead-dark">
                        <tr>
                          <th className="col-1">ID</th>
                          <th className="">Người đặt hàng</th>
                          <th className="">Số điện thoại</th>
                          <th className="col-1">Tổng tiền</th>
                          <th className="col-1">Trạng thái</th>
                          <th className="">Ngày đặt</th>
                          <th className="text-center col-1">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders?.map((item) => (
                          <OrderItem
                            order={item}
                            onEditClick={handleEditClick}
                            onDeleteClick={handleDeleteClick}
                            onViewClick={handleViewClick}
                          />
                        ))}
                      </tbody>
                    </table>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "16px",
                      }}
                    >
                      <Stack spacing={2}>
                        <Pagination
                          count={countPage}
                          color="primary"
                          page={currentPage}
                          onChange={handlePageChange}
                          // renderItem={(item) => (
                          //   <PaginationItem
                          //     component={Link}
                          //     to={`/products/list${item.page === 1 ? '' : `?page=${item.page}`}`}
                          //     {...item}
                          //   />
                          // )}
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ListOrder;
