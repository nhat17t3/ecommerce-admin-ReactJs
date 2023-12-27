import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteUser, getListUserByPage } from "../../../actions";
import Layout from "../../../components/Layout";
import UserItem from "../UserItem";

ListUser.propTypes = {};

function ListUser(props) {
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
    dispatch(getListUserByPage(formData));
  }, [currentPage]);

  const userStore = useSelector((state) => state.user);
  const users = useSelector((state) => state.user.listUser);

  const handlePageChange = async (event, pageNumber) => {
    console.log(pageNumber, "page");
    setCurrentPage(pageNumber);
  };

  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/users/edit/${item.id}`;

    history.push(editUrl);
  };

  const handleViewClick = (item) => {
    console.log("View: ", item);
    const viewUrl = `/users/view/${item.id}`;
    history.push(viewUrl);
  };

  const handleDeleteClick = async (item) => {
    console.log("delete: ", item);
    await dispatch(deleteUser(item));
    const formData = new FormData();
    formData.append("pageNumber", currentPage - 1);
    formData.append("pageSize", pageSize);
    await dispatch(getListUserByPage(formData));
    setReRender(!reRender);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);

    const formData = new FormData();
    formData.append("pageNumber", currentPage - 1);
    formData.append("pageSize", pageSize);
    formData.append("inputSearch", searchFeild);
    dispatch(getListUserByPage(formData));
  };
  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-10">
            <div className="box">
              <div className="box-header with-border">
                <h1 className="card-title text-center">Quản lí khách hàng</h1>
              </div>
              <div className="box-header with-border row">
                <div className="col-sm-6">
                  <Link to={"/users/add"} className="btn btn-info">
                    Thêm khách hàng
                  </Link>
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
                        <th className="text-center">Tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th style={{ width: 140 }}>Trạng thái</th>
                        <th
                          className="text-center col-1"
                          style={{ width: 140 }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?.map((item) => (
                        <UserItem
                          user={item}
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
                        count={userStore.totalPages}
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

export default ListUser;
