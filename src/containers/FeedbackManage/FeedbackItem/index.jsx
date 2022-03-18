import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateFeedback } from "../../../actions";


function FeedbackItem(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const { feedback, onEditClick, onDeleteClick, onViewClick } = props;
  
  const [isRead, setIsRead] = useState(feedback.isRead);

  useEffect(() => {
    setIsRead(feedback.isRead)
  }, [feedback.isRead])
  

  const handleEditClick = () => {
    if (onEditClick) onEditClick(feedback);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(feedback);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(feedback);
  };

  const handleReadClick = () => {
    const form = {
      name : feedback.name,
      email : feedback.email,
      phone : feedback.phone,
      title : feedback.title,
      content : feedback.content,
      isRead : !isRead
      };
    console.log(form,"edit");
    // alert(JSON.stringify(k));

    dispatch(updateFeedback(+feedback.id,form));
  };

  return (
    <>
      <tr key={feedback.id}>
        <td>{feedback.id}</td>
        <td>{feedback.name} </td>
        <td >{feedback.email}</td>
        <td >{feedback.phone}</td>
        <td >{feedback.title}</td>
        {/* <td>
          <label class="toggle-switch toggle-switch-success" >
            <input
              type="checkbox"
              name="isRead"
              value={isRead}
              onChange={() => {
                setIsRead(!isRead);
                handleReadClick();
              }}
              checked={isRead}
            />
            <span class="toggle-slider round"></span>
          </label>
        </td> */}

<td>
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-success btn-sm btn-icon-text mr-3"
              onClick={handleEditClick}
            >
              Xem
              <i className="typcn typcn-edit btn-icon-append" />
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm btn-icon-text"
              onClick={handleDeleteClick}
            >
              Xóa
              <i className="typcn typcn-delete-outline btn-icon-append" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default FeedbackItem;
