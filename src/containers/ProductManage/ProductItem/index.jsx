import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProductItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { product, onEditClick, onDeleteClick, onViewClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(product);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(product);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(product);
  };

  return (
    <>
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>
          <img
            src={product.images[0]?.imagePath}
            alt=""
            width={60}
            height={50}
          />
        </td>
        <td className="text-wrap">{product.name} </td>
        <td>{product.price}</td>
        <td>{product.category?.name} </td>

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

export default ProductItem;
