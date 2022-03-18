import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateSlide } from "../../../actions";


function SlideItem(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const { slide, onEditClick, onDeleteClick, onViewClick } = props;
  
  const [isActive, setIsActive] = useState(slide.isActive);

  useEffect(() => {
    setIsActive(slide.isActive)
  }, [slide.isActive])
  

  const handleEditClick = () => {
    if (onEditClick) onEditClick(slide);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(slide);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(slide);
  };

  const handleActiveClick = async () => {
    const formData = new FormData();
		formData.append('name', slide.name);
		formData.append('sort', slide.sort);
		formData.append('link', slide.link);
		formData.append('isActive', !isActive);

    await dispatch(updateSlide(Number(slide.id),formData));
    history.push("/slides/list");
  };

  return (
    <>
      <tr key={slide.id}>
        <td>{slide.id}</td>
        <td><img src={slide.image} alt="anh" /></td>
        <td>{slide.name} </td>
        {/* <td>{slide.sort}</td> */}
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

export default SlideItem;
