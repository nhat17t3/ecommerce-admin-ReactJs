import React, { useEffect, useState } from "react";
// import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getListCategoryOrder, getListPayment, getListProductByPage, getProductById, getUserById } from "../../../actions";
import {
  getOrderById,updateOrder
} from "../../../actions/order.actions";
import Layout from "../../../components/Layout";

EditOrder.propTypes = {};

EditOrder.defaultProps = {};

function EditOrder(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { orderId } = useParams();

//   const [ isConfirm, setIsConfirm] = useState(false);
//   const [ isPay, setIsPay] = useState(false);
//   const [ isCancle, setIsCancle] = useState(false);
  const [ render, setRender] = useState(false);
  
  useEffect(() => {
      dispatch(getOrderById(+orderId));
    }, []);

    const findItem = useSelector((state) => state.order.order);

    


    
    //   useEffect(() => {
    //     dispatch(getListPayment());
    //   }, []);

    //   const listPayment = useSelector((state)=> state.payment.listPayment)
    // const payment = listPayment?.find((e)=>e.id===findItem.paymentId)
//   useEffect(() => {
//     dispatch(getProductById(findItem.orderDetails?.id?.productId));
//   }, [findItem]);

//   useEffect(() => {
//     if (findItem) {
//       setIsConfirm(findItem.isConfirm);
//       setIsPay(findItem.isPay);
//       setIsCancle(findItem.isCancle);
//     }
//   }, [findItem]);

  const handleConfirm = async (e) => {
    const form = {
      isConfirm : true,
      status :1,
      isPay : false,
      isCancle : false,
      isDone : false
    };
    await dispatch(updateOrder(+orderId,form));
    setRender(!render);
    // history.goBack();
  };

  const handleShip = async (e) => {
    const form = {
      isConfirm : true,
      status :2,
      isPay : false,
      isCancle : false,
      isDone : false
    };
    await dispatch(updateOrder(+orderId,form));
    setRender(!render);
    // history.goBack();
  };
  const handleSucess = async (e) => {
    const form = {
      isDone : true,
      status : 3,
      isPay : true,
      isCancle : false,
      isConfirm : false
    };
    await dispatch(updateOrder(+orderId,form));
    setRender(!render);
    // history.goBack();
  };

  const handleCancel = async (e) => {
    const form = {
      isCancle : true,
      status : 4,
      isPay : false,
      isConfirm : false,
      isDone : false
    };
    await dispatch(updateOrder(+orderId,form));
    setRender(!render);
  
    // history.goBack();
  };


  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-10 grid-margin stretch-card offset-md-1">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Xem đơn hàng</h4>
                  {/* <p className="card-description">Basic form layout</p> */}
                  <div className="card-body">
  <header className="d-lg-flex">
    <div className="flex-grow-1">
      <h6 className="mb-0">Order ID: {findItem.id} <i className="dot" />  
        <span className=""> {findItem.status == null ? <span class="badge bg-warning">Chờ xác nhận</span> :
        findItem.status == 1 ? <span class="badge bg-primary">Đã xác nhận</span> :
        findItem.status == 2 ? <span class="badge bg-info">Đang giao hàng</span> :
        findItem.status == 3 ? <span class="badge bg-success">Thành công</span> :
        <span class="badge bg-danger">Đã hủy</span>}</span>
      </h6>
      <span className="text-muted">Ngày đặt hàng: {findItem.createdAt}</span>
    </div>
   
    <div className="btn-group">
  <button type="button" className="btn btn-success">Thao tác</button>
  <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" id="dropdownMenuSplitButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span className="sr-only">Toggle Dropdown</span>
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuSplitButton3" style={{}}>
   <button className="dropdown-item" href="#" onClick={handleConfirm}>Xác nhận đơn hàng</button>
   <button className="dropdown-item" href="#" onClick={handleShip}>Xử lí và Vận chuyển</button>
   <button className="dropdown-item" href="#"  onClick={handleSucess}>Giao hàng thành công</button>
   <button className="dropdown-item" href="#"  onClick={handleCancel}>Hủy đơn hàng</button>
   
</div>

    </div>
  </header>
  <hr />
  <div className="row">

    <div className="col-lg-8 border-start">
      <p className="mb-0 text-muted">Thông tin nhận hàng</p>
      <p className="m-0">Họ tên: {findItem.nameReceiver} <br /> 
       Số điện thoại: {findItem.phoneReceiver} <br />
       Địa chỉ:  {findItem.phoneReceiver} </p>
    </div> {/* col.// */}
    <div className="col-lg-4 border-start">
      <p className="mb-0 text-muted">Hình thức thanh toán</p>
      <p className="m-0">
        <span className="text-danger"> {findItem.payment?.name} </span> <br /> 
       
      </p>
    </div> {/* col.// */}
  </div> {/* row.// */}
  <hr />
  <div className="row">
<div className="col-8">
  {findItem.orderDetails?.map((element)=> 
<article className="row gy-3 mb-4">
  <div className="col-lg-5">
    <figure className="itemside me-lg-5">
      <div className="aside"><img src={"http://localhost:8080/files/" + element.product.image}  className="img-sm img-thumbnail" /></div>
      <figcaption className="info">
        <a href="#" className="title">{element.product?.name}</a>
        {/* <p className="text-muted"> Yellow, Jeans </p> */}
      </figcaption>
    </figure>
  </div>
  <div className="col-lg-2 col-sm-4 col-6">
    <div className="price-wrap lh-sm"> 
      <var className="price h6">{element.promotionPrice * element.quantity} VNĐ</var>  <br />
      <small className="text-muted"> {element.promotionPrice} VNĐ x {element.quantity}  </small> 
    </div> {/* price-wrap .// */}
  </div>
</article>
)}
</div>
  
  <div className="col-4">
  <div className="card">
  <div className="card-body">
    <dl className="dlist-align">
      <dt>Giá sản phẩm:</dt>
      <dd className="text-end">{findItem.total-findItem.shippingFee + findItem.discount} VNĐ</dd>
    </dl>
    <dl className="dlist-align">
      <dt>phí vận chuyển</dt>
      <dd className="text-end text-danger"> + {findItem.shippingFee} VNĐ</dd>
    </dl>
    <dl className="dlist-align">
      <dt>Giảm giá</dt>
      <dd className="text-end text-success">- {findItem.discount} VNĐ</dd>
    </dl>
    <hr />
    <dl className="dlist-align">
      <dt>Tổng cộng:</dt>
      <dd className="text-end text-dark h5"> {findItem.total} VNĐ </dd>
    </dl>

  </div> {/* card-body.// */}
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

export default EditOrder;
