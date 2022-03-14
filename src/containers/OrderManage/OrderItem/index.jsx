import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateOrder } from "../../../actions";


function OrderItem(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const { order, onEditClick, onDeleteClick, onViewClick } = props;
  
  // const [isHot, setIsHot] = useState(order.isHot);

  // useEffect(() => {
  //   setIsHot(order.isHot)
  // }, [order.isHot])
  

  const handleEditClick = () => {
    if (onEditClick) onEditClick(order);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(order);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(order);
  };

  // const handleHotClick = () => {
  //   const form = {
  //     name : order.name,
  //     shortDesc : order.shortDesc,
  //     description : order.description,
  //     categoryOrderId : order.categoryOrder?.id,
  //     isActive : order.isActive,
  //     isHot : !isHot
  //     };
  //   console.log(form,"edit");
  //   // alert(JSON.stringify(k));

  //   dispatch(updateOrder(+order.id,form));
  // };

  return (
    <>
      <tr key={order.id}>
      <td>{order.id}</td>
        <td>{order.nameReceiver}</td>
        <td>{order.phoneReceiver} </td>
        <td >{order.total}</td>
        <td >{order.status == null ? <span class="badge bg-warning">Chờ xác nhận</span> :
        order.status == 1 ? <span class="badge bg-primary">Đã xác nhận</span> :
        order.status == 2 ? <span class="badge bg-info">Đang giao hàng</span> :
        order.status == 3 ? <span class="badge bg-success">Thành công</span> :
        <span class="badge bg-danger">Đã hủy</span>}</td>
        <td >{order.createdAt}</td>

        <td>
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-success btn-sm "
              onClick={handleEditClick}
            >
              View
              <i classname="fa-solid fa-eye"></i>
            </button>
            {/* <button
              type="button"
              className="btn btn-danger btn-sm btn-icon-text"
              onClick={handleDeleteClick}
            >
              Delete
              <i className="typcn typcn-delete-outline btn-icon-append" />
            </button> */}
          </div>
        </td>
      </tr>
    </>
  );
}

export default OrderItem;
