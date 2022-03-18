import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateTransporter } from "../../../actions";


function TransporterItem(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const { transporter, onEditClick, onDeleteClick, onViewClick } = props;
  
  const [isActive, setIsActive] = useState(transporter.isActive);

  useEffect(() => {
    setIsActive(transporter.isActive)
  }, [transporter.isActive])
  

  const handleEditClick = () => {
    if (onEditClick) onEditClick(transporter);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(transporter);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(transporter);
  };

  const handleActiveClick = () => {
    const form = {
      name : transporter.name,
      description : transporter.description,
      fee : transporter.fee,
      isActive : !isActive
      };
    console.log(form,"edit");
    // alert(JSON.stringify(k));

    dispatch(updateTransporter(Number(transporter.id),form));
  };

  return (
    <>
      <tr key={transporter.id}>
        <td>{transporter.id}</td>
        <td>{transporter.name} </td>
        <td >{transporter.fee} VNĐ</td>
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
              view
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

export default TransporterItem;
