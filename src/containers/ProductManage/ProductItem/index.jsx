import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateProduct } from "../../../actions";

function ProductItem(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { product, onEditClick, onDeleteClick, onViewClick } = props;

  const [isHot, setIsHot] = useState(product.isHot);
  const [isNew, setIsNew] = useState(product.isNew);
  const [isActive, setIsActive] = useState(product.isActive);

  useEffect(() => {
    setIsActive(product.isActive)
  }, [product.isActive])

  useEffect(() => {
    setIsHot(product.isHot);
  }, [product.isHot]);

  useEffect(() => {
    setIsNew(product.isNew);
  }, [product.isNew]);

  const handleEditClick = () => {
    if (onEditClick) onEditClick(product);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(product);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(product);
  };

  const handleHotClick = async () => {
    const formData = new FormData();

    formData.append("name", product.name);
    formData.append("slug", product.slug);
    formData.append("code", product.code);
    formData.append("unitPrice", product.unitPrice);
    formData.append("promotionPrice", product.promotionPrice);
    formData.append("instock", product.instock);
    formData.append("shortDesc", product.shortDesc);
    formData.append("description", product.description);
    formData.append("ingredient", product.ingredient);
    formData.append("specification", product.specification);
    formData.append("isHot", !isHot);
    formData.append("isNew", product.isNew);
    formData.append("isActive", product.isActive);
    formData.append("brandId", product.brand?.id);
    formData.append("categoryId", product.category?.id);
    // let listcate = [];
    // for (const a of product.categories) {
    //   listcate.push(a.id);
    // }
    // formData.append("categories", listcate);

    await dispatch(updateProduct(Number(product.id), formData));
  };
  const handleActiveClick = async () => {
    const formData = new FormData();

    formData.append("name", product.name);
    formData.append("slug", product.slug);
    formData.append("code", product.code);
    formData.append("unitPrice", product.unitPrice);
    formData.append("promotionPrice", product.promotionPrice);
    formData.append("instock", product.instock);
    formData.append("shortDesc", product.shortDesc);
    formData.append("description", product.description);
    formData.append("ingredient", product.ingredient);
    formData.append("specification", product.specification);
    formData.append("isHot", product.isHot);
    formData.append("isNew", product.isNew);
    formData.append("isActive", !isActive);
    formData.append("brandId", product.brand?.id);
    formData.append("categoryId", product.category?.id);

    // let listcate = [];
    // for (const a of product.categories) {
    //   listcate.push(a.id);
    // }
    // formData.append("categories", listcate);

    await dispatch(updateProduct(Number(product.id), formData));
  };
  // const handleActiveClick = () => {
  //   const form = {
  //     id: Number(product.id),
  //     name : product.name,
  //     description : product.description,
  //     isActive : !isActive
  //     };
  //   console.log(form);
  //   // alert(JSON.stringify(k));

  //   dispatch(updateProduct(form));
  //   // history.push("/products/list");
  // };

  return (
    <>
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>
          <img src={product.image} alt="" width={60} height={50} />
        </td>
        <td>{product.code}</td>
        <td className="text-wrap">{product.name} </td>
        <td>{product.category?.name} </td>
        <td>{product.brand?.name} </td>
        <td>
         
          <label className="switch switch-default switch-pill switch-danger mr-2">
            <input
              type="checkbox"
              className="switch-input"
              name="isHot"
              value={isHot}
              onChange={() => {
                setIsHot(!isHot);
                handleHotClick();
              }}
              checked={isHot}
            />
            <span className="switch-label" />
            <span className="switch-handle" />
          </label>
        </td>

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

        {/* <td>
          <label class="toggle-switch toggle-switch-success" >
            <input
              type="checkbox"
              name="isActive"
              value={isActive}
              onChange={() => {
                setIsActive(!isActive);
                handleActiveClick();
              }}
              checked={isActive}
            />
            <span class="toggle-slider round"></span>
          </label>
        </td> */}

        <td>
          <div className="text-center">
            
                <Link
                  
                  data-toggle="tooltip"
                  data-placement="top"
                  title
                  data-original-title="Edit"
                  className="mr-2"
                  onClick={handleEditClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-edit-2 text-success"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                </Link>
              
         
                <Link
                  data-toggle="tooltip"
                  data-placement="top"
                  title
                  data-original-title="Delete"
                  onClick={handleDeleteClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-trash-2 text-danger"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1={10} y1={11} x2={10} y2={17} />
                    <line x1={14} y1={11} x2={14} y2={17} />
                  </svg>
                </Link>
              
            
          </div>
        </td>
      </tr>
    </>
  );
}

export default ProductItem;
