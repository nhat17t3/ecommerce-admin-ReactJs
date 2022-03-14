import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  deletePayment,
  getListPayment
} from "../../../actions/payment.actions";
import Layout from "../../../components/Layout";
import PaymentItem from "../PaymentItem";


ListPayment.propTypes = {};

function ListPayment(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getListPayment());
  }, []);

  const listPayment = useSelector((state) => state.payment.listPayment);

  const handleEditClick = (item) => {
    console.log("Edit: ", item);
    const editUrl = `/payments/edit/${item.id}`;
    history.push(editUrl);
  };

  const handleViewClick = (item) => {
    console.log("View: ", item);
    const viewUrl = `/payments/${item.id}`;
    history.push(viewUrl);
  };

  const handleDeleteClick =  (item) => {
    console.log("delete: ", item);
     dispatch(deletePayment(item));
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
                  <h3 className="text-center">Quản lí thanh toán</h3>
                  <Link to={"/payments/add"} className="btn btn-info">
                    Thêm thanh toán
                  </Link>
                  <div className="table-responsive pt-3">
                    <table className="table table-striped project-orders-table">
                      <thead className="thead-dark">
                        <tr>
                          <th className="ml-5 col-1">ID</th>
                          <th>Tên</th>
                          {/* <th>Mô tả</th> */}
                          <th className="col-1">Kích hoạt</th>
                          <th className="col-1 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listPayment?.map((item) => (
                          <PaymentItem
                            payment={item}
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

export default ListPayment;
