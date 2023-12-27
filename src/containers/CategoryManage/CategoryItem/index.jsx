import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateCategory } from "../../../actions";

function CategoryItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { category, onEditClick, onDeleteClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(category);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(category);
  };

  return (
    <>
      <tr key={category.id}>
        <td>{category.id}</td>
        <td>{category.name} </td>
        <td>
          <div className="d-flex align-items-center ">
            <button
              type="button"
              className="btn btn-success btn-sm btn-icon-text"
              style={{ marginRight: "8px" }}
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

export default CategoryItem;
