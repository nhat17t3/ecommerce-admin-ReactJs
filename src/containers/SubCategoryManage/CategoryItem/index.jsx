import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateCategory } from "../../../actions";


function CategoryItem(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const { category, onEditClick, onDeleteClick, onViewClick ,listCategory } = props;
  
  const [isActive, setIsActive] = useState(category.isActive);

  useEffect(() => {
    setIsActive(category.isActive)
  }, [category.isActive])
  

  const handleEditClick = () => {
    if (onEditClick) onEditClick(category);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(category);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(category);
  };

  const handleActiveClick = () => {
    const form = {
      id: Number(category.id),
      name : category.name,
      slug : category.slug,
      isActive : !isActive
      };
    console.log(form,"edit");
    // alert(JSON.stringify(k));

    dispatch(updateCategory(form));
  };

  const cateParent = listCategory.find((element)=> element.id ==category.parentId)

  return (
    <>
      <tr key={category.id}>
        <td>{category.id}</td>
        <td >{category.name} </td>
        <td >{cateParent?.name}</td>
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

export default CategoryItem;
