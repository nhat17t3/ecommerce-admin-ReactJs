import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateCategoryArticle } from "../../../actions";


function CategoryArticleItem(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const { categoryArticle, onEditClick, onDeleteClick, onViewClick } = props;
  
  const [isActive, setIsActive] = useState(categoryArticle.isActive);

  useEffect(() => {
    setIsActive(categoryArticle.isActive)
  }, [categoryArticle.isActive])
  

  const handleEditClick = () => {
    if (onEditClick) onEditClick(categoryArticle);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(categoryArticle);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(categoryArticle);
  };

  const handleActiveClick = () => {
    const form = {
      name : categoryArticle.name,
      isActive : !isActive
      };
    console.log(form,"edit");
    // alert(JSON.stringify(k));

    dispatch(updateCategoryArticle(Number(categoryArticle.id),form));
  };

  return (
    <>
      <tr key={categoryArticle.id}>
        <td>{categoryArticle.id}</td>
        <td>{categoryArticle.name} </td>
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

export default CategoryArticleItem;
