import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function OrderItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { order, onEditClick, onDeleteClick, onViewClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(order);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(order);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(order);
  };

  return (
    <>
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.nameReceiver}</td>
        <td>{order.phoneReceiver}</td>
        <td>{order.totalPrice}</td>
        <td>{order.paymentStatus}</td>
        <td>{order.orderStatus} </td>
        <td>{order.createdAt} </td>

        <td>
          <div className="d-flex align-items-center ">
            <button
              type="button"
              className="btn btn-success btn-sm btn-icon-text"
              style={{ marginRight: "8px" }}
              onClick={handleViewClick}
            >
              Edit
              <i className="typcn typcn-edit btn-icon-append" />
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm btn-icon-text"
              onClick={handleDeleteClick}
            >
              Delete
              <i className="typcn typcn-delete-outline btn-icon-append" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default OrderItem;
