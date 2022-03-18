import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  deleteTransporter,
  getListTransporter
} from "../../../actions/transporter.actions";
import Layout from "../../../components/Layout";
import TransporterItem from "../TransporterItem";


ListTransporter.propTypes = {};

function ListTransporter(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getListTransporter());
  }, []);

  const listTransporter = useSelector((state) => state.transporter.listTransporter);

  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/transporters/edit/${item.id}`;
    history.push(editUrl);
  };

  const handleViewClick = (item) => {
    console.log("View: ", item);
    const viewUrl = `/transporters/${item.id}`;
    history.push(viewUrl);
  };

  const handleDeleteClick =  (item) => {
    console.log("delete: ", item);
     dispatch(deleteTransporter(item));
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
                  <h3 className="text-center">Quản lí phương thức giao hàng</h3>
                  <Link to={"/transporters/add"} className="btn btn-info">
                    Thêm phương thức GH
                  </Link>
                  <div className="table-responsive pt-3">
                    <table className="table table-striped project-orders-table">
                      <thead className="thead-dark">
                        <tr>
                          <th className="ml-5 col-1">ID</th>
                          <th>Tên</th>
                          <th>Phí</th>
                          <th className="col-2">Kích hoạt</th>
                          <th className="col-1 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listTransporter?.map((item) => (
                          <TransporterItem
                            transporter={item}
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

export default ListTransporter;
