import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ArticleItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { article, onEditClick, onDeleteClick, onViewClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(article);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(article);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(article);
  };

  return (
    <>
      <tr key={article.id}>
        <td>{article.id}</td>
        <td>
          <img src={article.imagePath} alt="" width={60} height={50} />
        </td>
        <td className="text-wrap">{article.name} </td>
        <td>{article.categoryArticle?.name} </td>

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

export default ArticleItem;
