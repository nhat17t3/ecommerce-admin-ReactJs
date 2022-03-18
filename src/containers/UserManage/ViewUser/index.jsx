import React, { useEffect, useState } from "react";
import Moment from "react-moment";
// import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getListCategoryUser } from "../../../actions";
import { getUserById, updateUser } from "../../../actions/user.actions";
import Layout from "../../../components/Layout";

function ViewUser(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUserById(+userId));
  }, []);
  const findItem = useSelector((state) => state.user.user);

  const handleViewClick = (id) =>{
    history.push(`/orders/edit/${id}`)
  }

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-10 grid-margin stretch-card offset-md-1">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-center">Xem Chi tiết khách hàng</h3>
                  {/* <p className="card-description">Basic form layout</p> */}
                  <div className="card-body">
                    <div style={{fontSize: "18px"}} className="mb-5">
                    Họ : {findItem.firstName}<br />
                    Tên: {findItem.lastName} <br />
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
                          <th className="col-1">STT</th>
                          <th className="">Tên người nhận</th>
                          <th className="">SĐT người nhận</th>
                          <th className="col-2">Tổng tiền</th>
                          <th className="col-1">Trạng thái</th>
                          <th className="">Ngày đặt</th>
                          <th className="text-center col-1">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {findItem.orders?.map((order , index) => (
                          <tr key={order.id}>
                          <td>{index + 1}</td>
                            <td>{order.nameReceiver}</td>
                            <td>{order.phoneReceiver} </td>
                            <td >{order.total}</td>
                            <td >{order.status == null ? <span class="badge bg-warning">Chờ xác nhận</span> :
                            order.status == 1 ? <span class="badge bg-primary">Đã xác nhận</span> :
                            order.status == 2 ? <span class="badge bg-info">Đang giao hàng</span> :
                            order.status == 3 ? <span class="badge bg-success">Thành công</span> :
                            <span class="badge bg-danger">Đã hủy</span>}</td>
                            <td ><Moment format="YYYY-MM-DD HH:mm">{order.createdAt}</Moment></td>
                    
                            <td>
                              <div className="d-flex align-items-center">
                                <button
                                  type="button"
                                  className="btn btn-success btn-sm "
                                  onClick={()=>handleViewClick(order.id)}
                                >
                                  View
                                  <i classname="fa-solid fa-eye"></i>
                                </button>
                                
                              </div>
                            </td>
                          </tr>
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
