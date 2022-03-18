import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateArticle } from "../../../actions";


function ArticleItem(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const { article, onEditClick, onDeleteClick, onViewClick } = props;
  
  // const [isHot, setIsHot] = useState(article.isHot);

  // useEffect(() => {
  //   setIsHot(article.isHot)
  // }, [article.isHot])
  

  const handleEditClick = () => {
    if (onEditClick) onEditClick(article);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(article);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(article);
  };

  // const handleHotClick = () => {
  //   const form = {
  //     name : article.name,
  //     shortDesc : article.shortDesc,
  //     description : article.description,
  //     categoryArticleId : article.categoryArticle?.id,
  //     isActive : article.isActive,
  //     isHot : !isHot
  //     };
  //   console.log(form,"edit");
  //   // alert(JSON.stringify(k));

  //   dispatch(updateArticle(+article.id,form));
  // };

  return (
    <>
      <tr key={article.id}>
        <td>{article.id}</td>
        <td>{article.name} </td>
        <td >{article.categoryArticle?.name}</td>
        {/* <td>
          <label class="toggle-switch toggle-switch-success" >
            <input
              type="checkbox"
              name="isHot"
              value={isHot}
              onChange={() => {
                setIsHot(!isHot);
                handleHotClick();
              }}
              checked={isHot}
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

export default ArticleItem;
