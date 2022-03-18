import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { deleteBrand, getListBrand } from "../../../actions";
import Layout from "../../../components/Layout";
import BrandItem from "../BrandItem";



ListBrand.propTypes = {};

function ListBrand(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getListBrand());
  }, []);

  const listBrand = useSelector((state) => state.brand.listBrand);

  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/brands/edit/${item.id}`;
    history.push(editUrl);
  };

  const handleViewClick = (item) => {
    console.log("View: ", item);
    const viewUrl = `/brands/${item.id}`;
    history.push(viewUrl);
  };

  const handleDeleteClick =  (item) => {
    console.log("delete: ", item);
     dispatch(deleteBrand(item));
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body ">
                  <h3 className=" text-center">Quản lí thương hiệu (Brand)</h3>
                  <Link to={"/brands/add"} className="btn btn-info">
                    Thêm thương hiệu
                  </Link>
                  <div className="table-responsive pt-3">
                    <table className="table table-striped project-orders-table ">
                      <thead className="thead-dark">
                        <tr>
                          <th className="col-3">ID</th>
                          <th className="col-3">Ảnh</th>
                          <th>Tên</th>
                          {/* <th className="col-2">Kích hoạt</th> */}
                          <th className="text-center col-1">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listBrand?.map((item) => (
                          <BrandItem
                            brand={item}
                            onEditClick={handleEditClick}
                            onDeleteClick={handleDeleteClick}
                            onViewClick={handleViewClick}
                          />
                        ))}
                      </tbody>
                    </table>
                    {/*  */}
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

export default ListBrand;
