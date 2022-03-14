import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateVoucher } from "../../../actions";


function VoucherItem(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const { voucher, onEditClick, onDeleteClick, onViewClick } = props;
  
  const [isActive, setIsActive] = useState(voucher.isActive);

  useEffect(() => {
    setIsActive(voucher.isActive)
  }, [voucher.isActive])
  

  const handleEditClick = () => {
    if (onEditClick) onEditClick(voucher);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(voucher);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(voucher);
  };

  const handleActiveClick = () => {
    const form = {
      name : voucher.name,
      code : voucher.code,
      type : voucher.type,
      minOrderValue : voucher.minOrderValue,
      maxPrice : voucher.maxPrice,
      value : voucher.value,
      quantity : voucher.quantity,
      startAt : voucher.startAt,
      endAt : voucher.endAt,
      isActive : !isActive
      };
    console.log(form,"edit");
    // alert(JSON.stringify(k));

    dispatch(updateVoucher(+voucher.id,form));
  };

  return (
    <>
      <tr key={voucher.id}>
        <td>{voucher.id}</td>
        <td>{voucher.code} </td>
        <td >{voucher.name}</td>
        <td >{voucher.quantity}</td>
        <td >{voucher.startAt}</td>
        <td >{voucher.endAt}</td>
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
          <div className="text-center">
            
                <Link
                  
                  data-toggle="tooltip"
                  data-placement="top"
                  title
                  data-original-title="Edit"
                  className="mr-2"
                  onClick={handleEditClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-edit-2 text-success"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                </Link>
              
         
                <Link
                  data-toggle="tooltip"
                  data-placement="top"
                  title
                  data-original-title="Delete"
                  onClick={handleDeleteClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-trash-2 text-danger"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1={10} y1={11} x2={10} y2={17} />
                    <line x1={14} y1={11} x2={14} y2={17} />
                  </svg>
                </Link>
              
            
          </div>
        </td>
      </tr>
    </>
  );
}

export default VoucherItem;
