import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteProduct, getListProductByPage } from "../../../actions";
import Layout from "../../../components/Layout";
import ProductItem from "../ProductItem";

ListProduct.propTypes = {};

function ListProduct(props) {
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
    dispatch(getListProductByPage(formData));
  }, [currentPage]);

  const productStore = useSelector((state) => state.product);
  const products = useSelector((state) => state.product.listProduct);

  const handlePageChange = async (event, pageNumber) => {
    console.log(pageNumber, "page");
    setCurrentPage(pageNumber);
  };

  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/products/edit/${item.id}`;
    // const editUrl = `/products/add`;

    history.push(editUrl);
  };

  const handleViewClick = (item) => {
    console.log("View: ", item);
    const viewUrl = `/products/${item.id}`;
    history.push(viewUrl);
  };

  const handleDeleteClick = async (item) => {
    console.log("delete: ", item);
    await dispatch(deleteProduct(item));
    const formData = new FormData();
    formData.append("pageNumber", currentPage - 1);
    formData.append("pageSize", pageSize);
    await dispatch(getListProductByPage(formData));
    setReRender(!reRender);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);

    const formData = new FormData();
    formData.append("pageNumber", currentPage - 1);
    formData.append("pageSize", pageSize);
    formData.append("name", searchFeild);
    dispatch(getListProductByPage(formData));
  };
  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-10">
            <div className="box">
              <div className="box-header with-border">
                <h1 className="card-title text-center">Quản lí sản phẩm</h1>
              </div>
              <div className="box-header with-border row">
                <div className="col-sm-6">
                  <Link to={"/products/add"} className="btn btn-info">
                    Thêm sản phẩm
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
                        <th style={{ width: 100 }}>Ảnh</th>

                        <th className="text-center">Tên</th>
                        <th style={{ width: 100 }}>Giá</th>
                        <th style={{ width: 140 }}>Category</th>
                        <th
                          className="text-center col-1"
                          style={{ width: 140 }}
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {products?.map((item) => (
                        <ProductItem
                          product={item}
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
                        count={productStore.totalPages}
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

export default ListProduct;
