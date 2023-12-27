import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  getOrderById,
  updateOrderStatus,
} from "../../../actions/order.actions";
import Layout from "../../../components/Layout";

EditOrder.propTypes = {};

EditOrder.defaultProps = {};

function EditOrder(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { orderId } = useParams();

  const [orderStatus, setOrderStatus] = useState("");
  const [trackingNumber, setTrackingNumber] = useState(null);
  const [render, setRender] = useState(false);

  useEffect(() => {
    dispatch(getOrderById(+orderId));
  }, []);

  const findItem = useSelector((state) => state.order.order);

  const createTrackingforOrder = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("trackingNumber", trackingNumber);
    formData.append("courierCode", "spx-vn");
    // dispatch(createTrackingforOrder(formData));
  };

  const handleCancelOrder = async (e) => {
    const formData = new FormData();
    formData.append("status", "cancle");
    await dispatch(updateOrderStatus(+orderId, formData));
  };

  return (
    <>
      <Layout>
        <div className="box p-3 mb-3">
          <div className="row">
            <div className="col-12">
              <h4>
                <i className="fas fa-globe" /> Ngày đặt hàng:{" "}
                <Moment format="YYYY/MM/DD HH:mm">{findItem?.createdAt}</Moment>
              </h4>
            </div>
          </div>
          <div className="row invoice-info">
            <div className="col-sm-4 invoice-col">
              From
              <address>
                <strong>Hoàng Long Nhật Shop</strong>
                <br />
                Triệu Sơn, Triệu Phong
                <br />
                Quảng Trị
                <br />
                Phone: 0369621657
                <br />
                Email: hoanglongnhat0605@gmail.com
              </address>
            </div>
            <div className="col-sm-4 invoice-col">
              To
              <address>
                <strong>{findItem.nameReceiver}</strong>
                <br />
                {findItem.addressReceiver}
                <br />
                Phone: {findItem.phoneReceiver}
                <br />
                Email: {findItem.emailReceiver}
              </address>
            </div>
            <div className="col-sm-4 invoice-col">
              <br />
              <b>Order ID:</b> {findItem.id}
              <br />
              <b>Trạng thái đơn hàng:</b> {findItem.orderStatus}
              <br />
              <b>Trạng thái thanh toán:</b> {findItem.paymentStatus}
              <br />
              <b>Phương thức thanh toán:</b> {findItem.paymentMethod?.name}
            </div>
          </div>
          <div className="row">
            <div className="col-12 table-responsive">
              <table className="table ">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>số lượng</th>
                    <th>tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {findItem.orderDetails?.map((element, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={element.product?.images[0]?.imagePath}
                          className="img-sm img-thumbnail"
                        />
                      </td>
                      <td>{element.product?.name}</td>
                      <td>{element.quantity}</td>
                      <td>{element.price * element.quantity} VNĐ</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p className="lead">Thành tiền</p>
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <th style={{ width: "50%" }}>Subtotal:</th>
                      <td>{findItem.totalPrice}</td>
                    </tr>

                    <tr>
                      <th>Shipping:</th>
                      <td>30.000</td>
                    </tr>
                    <tr>
                      <th>Total:</th>
                      <td>{findItem.totalPrice + 30000}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6">
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Tracking Order</h3>
                </div>
                <form
                  className="form-horizontal"
                  onSubmit={createTrackingforOrder}
                >
                  <div className="box-body">
                    <div className="form-group">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-4 control-label"
                      >
                        Số phiếu vận chuyển
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail3"
                          placeholder="Tracking number"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="inputPassword3"
                        className="col-sm-4 control-label"
                      >
                        Mã nhà vận chuyển
                      </label>
                      <div className="col-sm-8">
                        <select
                          className="form-control"
                          name="courierCode"
                          required
                        >
                          <option value={"spx-vn"}>Shoppe express</option>;
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="box-footer">
                    <button type="submit" className="btn btn-info pull-right">
                      Tạo tracking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row no-print">
            <div className="">
              <button
                type="button"
                className="btn btn-danger me-3"
                onClick={handleCancelOrder}
              >
                Hủy đơn hàng
              </button>
              <button type="button" className="btn btn-success">
                ... đơn hàng
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default EditOrder;
