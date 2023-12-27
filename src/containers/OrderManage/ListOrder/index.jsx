import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { deleteOrder, getListOrderByPage, updateAllOrderStatusFromTracking } from "../../../actions";
import Layout from "../../../components/Layout";
import OrderItem from "../OrderItem";

ListOrder.propTypes = {};

function ListOrder(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [reRender, setReRender] = useState(true);

  const [searchFeild, setSearchFeild] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const formData = new FormData();
    formData.append("pageNumber", currentPage - 1);
    formData.append("pageSize", 10);
    console.log("formData111", formData);
    dispatch(getListOrderByPage(formData));
  }, [currentPage]);

  const orderStore = useSelector((state) => state.order);
  const orders = useSelector((state) => state.order.listOrder);

  const handlePageChange = async (event, pageNumber) => {
    console.log(pageNumber, "page");
    setCurrentPage(pageNumber);
  };

  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/orders/edit/${item.id}`;
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
    const formData = new FormData();
    formData.append("pageNumber", currentPage - 1);
    formData.append("pageSize", pageSize);
    await dispatch(getListOrderByPage(formData));
    setReRender(!reRender);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);

    const formData = new FormData();
    formData.append("pageNumber", currentPage - 1);
    formData.append("pageSize", pageSize);
    formData.append("inputSearch", searchFeild);
    // formData.append("orderStatus", "delivered");
    // formData.append("ePaymentStatus", "PAID");
    dispatch(getListOrderByPage(formData));
  };
  const handleUpdateAllStatusTracking = (e) => {
    e.preventDefault();
    dispatch(updateAllOrderStatusFromTracking());
  };

  
  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-md-12">
            <div className="box">
              <div className="box-header with-border">
                <h1 className="card-title text-center">Quản lí đơn hàng</h1>
              </div>
              <div className="box-header with-border row">
                <div className="col-sm-6">
                  <button onClick={handleUpdateAllStatusTracking} className="btn btn-info">
                    Cập nhật trạng thái đơn hàng
                  </button>
                </div>
                <div className="col-sm-6">
                  <form
                    style={{ marginLeft: "100px" }}
                    id="example1_filter"
                    className="dataTables_filter"
                    onSubmit={handleSearch}
                  >
                    <label>
                      <input
                        type="search"
                        className="form-control "
                        placeholder=""
                        aria-controls="example1"
                        name="searchFeild"
                        id="searchFeild"
                        value={searchFeild}
                        onChange={(e) => setSearchFeild(e.target.value)}
                      />
                    </label>
                    <button
                      style={{ position: "absolute", top: "-1px" }}
                      className="btn btn-primary"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="box-body">
                <div className="table-responsive pt-3">
                  <table className="table table-striped project-orders-table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th style={{ width: 10 }}>ID</th>
                        <th style={{ width: 100 }}>Tên người nhận</th>
                        <th style={{ width: 100 }}>SĐT người nhận</th>
                        <th style={{ width: 100 }}>Tổng tiền</th>
                        <th style={{ width: 100 }}>Trạng thái thanh toán</th>
                        <th style={{ width: 100 }}>Trạng thái đơn hàng</th>
                        <th style={{ width: 100 }}>Ngày đặt</th>
                        <th
                          className="text-center col-1"
                          style={{ width: 140 }}
                        >
                          Actions
                        </th>
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
                        count={orderStore.totalPages}
                        color="primary"
                        page={currentPage}
                        onChange={handlePageChange}
                      />
                    </Stack>
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
