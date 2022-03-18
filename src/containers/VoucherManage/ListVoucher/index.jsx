import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  deleteVoucher,
  getListVoucherByPage,
  searchListVoucherByName,
} from "../../../actions/voucher.actions";
import Layout from "../../../components/Layout";
import VoucherItem from "../VoucherItem";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

ListVoucher.propTypes = {};

function ListVoucher(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  let query = useQuery();

  const [searchFeild, setSearchFeild] = useState("");
  const [reRender, setReRender] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    Number(query.get("page")) || 1
  );
  const limit = 5;

  useEffect(() => {
    if (searchFeild === "")
      dispatch(getListVoucherByPage(limit, currentPage - 1));
    else dispatch(searchListVoucherByName(searchFeild, limit, currentPage - 1));
  }, [currentPage]);

 
  const listVoucher = useSelector((state) => state.voucher.listVoucher);
  const count = useSelector((state) => state.voucher.count);
  var countPage = Math.ceil(count / limit);

  const handlePageChange = (event, pageNumber) => {
    console.log(pageNumber, "page");
    setCurrentPage(pageNumber);
    history.push(`?page=${pageNumber}`);
  };


  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/vouchers/edit/${item.id}`;
    // const editUrl = `/vouchers/add`;

    history.push(editUrl);
  };

  const handleViewClick = (item) => {
    console.log("View: ", item);
    const viewUrl = `/vouchers/${item.id}`;
    history.push(viewUrl);
  };

  const handleDeleteClick = async (item) => {
    console.log("delete: ", item);
    await dispatch(deleteVoucher(item));
    await dispatch(getListVoucherByPage(limit, currentPage - 1));
    setReRender(!reRender);
  };

  const handleSearch = (e) => {
   

    e.preventDefault();
    setCurrentPage(1);
    console.log(searchFeild, "search");
    if(searchFeild.trim()!= ""){
      // history.push(`?search=${searchFeild}&page=${1}`); 
      dispatch(searchListVoucherByName(searchFeild, limit, 0));

    } 
    else {
      dispatch(getListVoucherByPage(limit, 0));
      history.push('/vouchers/list')
    }
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body ">
                  <h3 className="text-center">Quản lí voucher</h3>
                  <div
                    className="navbar-menu-wrapper d-flex align-items-center"
                    style={{ justifyContent: "space-between" }}
                  >
                    <Link to={"/vouchers/add"} className="btn btn-info">
                      Thêm voucher
                    </Link>

                    <ul class="navbar-nav navbar-nav-right">
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
                  </div>
                  <div className="table-responsive pt-3">
                    <table className="table table-striped project-orders-table">
                      <thead className="thead-dark">
                        <tr>
                          <th className="ml-5 col-1">ID</th>
                          <th>code</th>
                          <th>Tên</th>
                          <th>Số lượng</th>
                          <th>Ngày bắt đầu</th>
                          <th>Ngày kết thúc</th>
                          <th className="col-1">kích hoạt</th>
                          <th className="text-center col-1">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listVoucher?.map((item) => (
                          <VoucherItem
                            voucher={item}
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

export default ListVoucher;
