import React, { useEffect } from "react";
import Moment from "react-moment";
// import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getUserById } from "../../../actions/user.actions";
import Layout from "../../../components/Layout";
import OrderItem from "../../OrderManage/OrderItem";

function ViewUser(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUserById(+userId));
  }, []);
  const findItem = useSelector((state) => state.user.user);

  const handleViewClick = (id) => {
    history.push(`/orders/edit/${id}`);
  };

  return (
    <>
      <Layout>
      <div className="row">
          <div className="col-md-12">
            <div className="box">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-center">Xem Chi tiết khách hàng</h3>
                  {/* <p className="card-description">Basic form layout</p> */}
                  <div className="card-body">
                    <div style={{ fontSize: "18px" }} className="mb-5">
                      Tên: {findItem.name} <br />
                      Email: {findItem.email} <br />
                      Số điện thoại: {findItem.phone} <br />
                      Địa chỉ : {findItem.address} <br />
                    </div>

                    {/* <hr /> */}

                    <h4> Danh sách đơn hàng đã đặt</h4>
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 table-responsive">
                            <div className="table-responsive pt-3">
                              <table className="table">
                                <thead className="">
                                  <tr>
                                  <th style={{ width: 10 }}>ID</th>
                        <th style={{ width: 100 }}>Tên người nhận</th>
                        <th style={{ width: 100 }}>SĐT người nhận</th>
                        <th style={{ width: 100 }}>Tổng tiền</th>
                        <th style={{ width: 100 }}>Trạng thái thanh toán</th>
                        <th style={{ width: 100 }}>Trạng thái đơn hàng</th>
                        <th style={{ width: 100 }}>Ngày đặt</th>
                                    <th className="text-center col-1">
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {findItem?.orders?.map((order, index) => (
                                    <OrderItem
                                    order={order}
                                    onViewClick={handleViewClick}
                                  />
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ViewUser;
