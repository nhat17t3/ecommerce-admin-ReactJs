import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updatePayment } from "../../../actions";


function PaymentItem(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const { payment, onEditClick, onDeleteClick, onViewClick } = props;
  
  const [isActive, setIsActive] = useState(payment.isActive);

  useEffect(() => {
    setIsActive(payment.isActive)
  }, [payment.isActive])
  

  const handleEditClick = () => {
    if (onEditClick) onEditClick(payment);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(payment);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(payment);
  };

  const handleActiveClick = () => {
    const form = {
      id: Number(payment.id),
      name : payment.name,
      description : payment.description,
      isActive : !isActive
      };
    console.log(form,"edit");
    // alert(JSON.stringify(k));

    dispatch(updatePayment(form));
  };

  return (
    <>
      <tr key={payment.id}>
        <td>{payment.id}</td>
        <td >{payment.name} </td>
        {/* <td style={{lineHeight:1.4, whiteSpace: "pre-wrap"}}>{payment.description}</td> */}
        <td>
        <label className="switch switch-default switch-pill switch-success mr-2">
            <input
              type="checkbox"
              className="switch-input"
              name="isActive"
              value={isActive}
              onChange={() => {
                setIsActive(!isActive);
                handleActiveClick();
              }}
              checked={isActive}
            />
            <span className="switch-label" />
            <span className="switch-handle" />
          </label>
        </td>

        <td>
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-success btn-sm btn-icon-text mr-3"
              onClick={handleEditClick}
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

export default PaymentItem;
