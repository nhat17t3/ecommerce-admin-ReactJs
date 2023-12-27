import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { getListCategory } from "../../../actions";
import { createProduct } from "../../../actions/product.actions";
import Layout from "../../../components/Layout";

AddProduct.propTypes = {};

function AddProduct(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMoreFile, setSelectedMoreFile] = useState([]);

  useEffect(() => {
    dispatch(getListCategory());
  }, []);

  const listCategory = useSelector((state) => state.category.listCategory);

  const changeHandlerFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", unitPrice);
    formData.append("description", description);
    formData.append("categoryId", categoryId);
    formData.append("imagePrimary", selectedFile);
    for (let i = 0; i < selectedMoreFile.length; i++) {
      formData.append(`moreImages`, selectedMoreFile[i]);
    }

    console.log("file", selectedFile);
    console.log("file", selectedMoreFile.length);
    await dispatch(createProduct(formData));

    history.goBack();
  };

  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="box ">
              <div className="box-header with-border">
                <h3 className=" text-center">Thêm sản phẩm</h3>
                <form className="forms-sample " onSubmit={handleSubmit}>
                  <div className="form-group col-12">
                    <label htmlFor="name">Tên sản phẩm</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder=""
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group col-6">
                    <label htmlFor="brand">Danh mục</label>
                    <select
                      className="form-control"
                      name="categoryId"
                      onChange={(e) => setCategoryId(e.target.value)}
                      value={categoryId}
                      required
                    >
                      <option value={""} hidden>
                        --chọn danh mục--
                      </option>
                      {listCategory?.map((item) => {
                        return <option value={item.id}>{item.name}</option>;
                      })}
                    </select>
                  </div>

                  <div className="form-group col-6">
                    <label htmlFor="name">Giá gốc</label>
                    <input
                      type="number"
                      name="unitPrice"
                      className="form-control"
                      id="unitPrice"
                      placeholder=""
                      value={unitPrice}
                      onChange={(e) => setUnitPrice(e.target.value)}
                      required
                    />
                  </div>

                  <div for="specification">Mô tả</div>

                  <SunEditor
                    onChange={(content) => setDescription(content)}
                    setContents={description}
                    name="description"
                    setOptions={{
                      height: 500,
                      buttonList: buttonList.complex,
                    }}
                  />

                  <div className="form-group col-12">
                    <label style={{ display: "block" }}>Hình ảnh</label>
                    <input
                      type="file"
                      name="imyy"
                      className=""
                      onChange={changeHandlerFile}
                      required
                    />
                  </div>

                  <div className="form-group col-12">
                    {/* <img src={moreImage}></img> */}
                    <label style={{ display: "block" }}>
                      Hình ảnh chi tiết
                    </label>
                    <input
                      multiple
                      type="file"
                      name="moreImage"
                      className=""
                      onChange={(event) =>
                        setSelectedMoreFile(event.target.files)
                      }
                      required
                    />
                  </div>

                  <div className="col-4"></div>
                  <button type="submit" className="btn btn-primary mr-2">
                    Thêm
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default AddProduct;
