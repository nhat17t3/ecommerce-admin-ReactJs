import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  deleteProduct,
  getListProductByPage,
  searchListProductByName,
} from "../../../actions";
import Layout from "../../../components/Layout";
import ProductItem from "../ProductItem";

ListProduct.propTypes = {};

function useQuery() {
  const { search } = useLocation();
  
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function ListProduct(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [searchFeild, setSearchFeild] = useState("");
  const [reRender, setReRender] = useState(true);
  
  let query = useQuery();

  const [currentPage, setCurrentPage] = useState(
    Number(query.get("page")) || 1
  );
  const limit = 5;

  useEffect(() => {
    if (searchFeild === "") dispatch(getListProductByPage(limit, currentPage - 1));
    else dispatch(searchListProductByName(searchFeild, limit, currentPage - 1));
  }, [currentPage]);

  const products = useSelector((state) => state.product.listProduct);
  const count = useSelector((state) => state.product.count);
  var countPage = Math.ceil(count/limit);

  const handlePageChange = (event, pageNumber) => {
    console.log(pageNumber, "page");
    setCurrentPage(pageNumber);
    history.push(`?page=${pageNumber}`);
  };

  //  const checkfilter = (subject, grade, address, product) => {
  //   let checka = false;
  //   let checkb = false;
  //   let checkc = false;
  //   if (subject == "All") checka = true;
  //   else checka = product.subject === subject;
  //   if (grade == "All") checkb = true;
  //   else checkb = product.grade === grade;
  //   if (address == "All") checkc = true;
  //   else checkc = product.address.toLowerCase().includes(address.toLowerCase());
  //   return checka && checkb && checkc;
  // };

  // const handlefillter = (e) => {
  //   console.log(subject, grade, address);

  //   const listfillter = products.filter((tutor) =>
  //     checkfilter(subject, grade, address, tutor)
  //   );
  //   console.log(listfillter);
  //   setListproduct(listfillter);
  // };

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
    await dispatch(getListProductByPage(limit, currentPage - 1));
    setReRender(!reRender);
  };


  const handleSearch = (e) => {
  
    e.preventDefault();
    setCurrentPage(1);
    console.log(searchFeild, "search");
    if(searchFeild.trim()!= ""){
      // history.push(`?search=${searchFeild}&page=${1}`); 
      dispatch(searchListProductByName(searchFeild, limit, 0));

    } 
    else {
      dispatch(getListProductByPage(limit, 0));
      history.push('/products/list')
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
                  <h1 className="card-title text-center">Quản lí sản phẩm</h1>
                  <div
                    className="navbar-menu-wrapper d-flex align-items-center"
                    style={{ justifyContent: "space-between" }}
                  >
                    <Link to={"/products/add"} className="btn btn-info">
                      Thêm sản phẩm
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
                    <table className="table table-striped project-orders-table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                          <th className="col-1">ID</th>
                          <th className="col-1">Ảnh</th>
                          <th className="col-1">Mã</th>
                          <th className="text-center">Tên</th>
                          <th  className="col-1">Category </th>
                          <th  className="col-1">Brand</th>
                          <th className="col-1">Hot</th>
                          <th  className="col-1" >Active</th>
                          <th className="text-center col-1">Actions</th>
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

                    <div style={{display:"flex", justifyContent: "end", marginTop: "16px"}}>

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

export default ListProduct;
