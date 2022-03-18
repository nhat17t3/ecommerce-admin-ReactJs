import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateBrand } from "../../../actions";

function BrandItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { brand, onEditClick, onDeleteClick, onViewClick } = props;

  const [isActive, setIsActive] = useState(brand.isActive);

  // useEffect(() => {
  //   setIsActive(brand.isActive);
  // }, [brand.isActive]);

  const handleEditClick = () => {
    if (onEditClick) onEditClick(brand);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(brand);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(brand);
  };

  // const handleActiveClick = async () => {
  //   const formData = new FormData();
  //   formData.append("name", brand.name);
  //   formData.append("slug", brand.slug);
  //   formData.append("isActive", !isActive);

  //   await dispatch(updateBrand(Number(brand.id), formData));
  //   history.push("/brands/list");
  // };

  return (
    <>
      <tr key={brand.id}>
        <td>{brand.id}</td>
        <td>
          <img src={brand.image} width="50" height="40" alt="brand" />
        </td>
        <td>{brand.name}</td>
        {/* <td>
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
        </td> */}

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

export default BrandItem;
