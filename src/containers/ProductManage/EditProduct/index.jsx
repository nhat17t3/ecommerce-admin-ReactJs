import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { getListCategory } from "../../../actions";
import {
  getProductById,
  updateProduct,
} from "../../../actions/product.actions";
import Layout from "../../../components/Layout";

EditProduct1.propTypes = {};

EditProduct1.defaultProps = {};

function EditProduct1(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();

  const [name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMoreFile, setSelectedMoreFile] = useState([]);

  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(getListCategory());
  }, []);

  const listCategory = useSelector((state) => state.category.listCategory);

  useEffect(() => {
    dispatch(getProductById(Number(productId)));
  }, []);

  const findItem = useSelector((state) => state.product.product);

  useEffect(() => {
    if (findItem) {
      setName(findItem.name);

      setUnitPrice(findItem.price);

      setDescription(findItem.description);

      setCategoryId(findItem.category?.id);
    }
  }, [findItem]);

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
    if (selectedFile !== null) formData.append("imagePrimary", selectedFile);
    if (selectedMoreFile !== null) {
      for (let i = 0; i < selectedMoreFile.length; i++) {
        formData.append(`moreImages`, selectedMoreFile[i]);
      }
    }
    await dispatch(updateProduct(Number(productId), formData));
    history.goBack();
  };

  var maniImagePath = findItem?.images?.length ?  findItem.images[0].imagePath : null;
  var detailImagePath = findItem?.images?.filter(function(word) {
    return word.isPrimary != true;
  });
  console.log(detailImagePath)

  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="box ">
              <div className="box-header with-border">
                <h3 className=" text-center">Cập nhật sản phẩm</h3>
                <div className="">
                  <form className="forms-sample" onSubmit={handleSubmit}>
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
                        <option value={""} hidden></option>
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
                        // required
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
                      <label style={{ display: "block" }}>Hình ảnh chính</label>
                      <img src={maniImagePath} alt="ảnh chính" className="d-block" style={{width:100, marginBottom: 10}} />
                      <input
                        type="file"
                        name="image"
                        className=""
                        onChange={(event) =>
                          setSelectedFile(event.target.files[0])
                        }
                        // required
                      />
                    </div>

                    <div className="form-group col-12">
                
                      <label style={{ display: "block" }}>
                        Hình ảnh chi tiết
                      </label>
                      {detailImagePath?.map((element) => {
                        return (
                          <img src={element.imagePath} alt="ảnh chi tiết" className="" style={{width:100, marginBottom: 10, marginRight: 10}}></img>
                        );
                      })}
                      <input
                        multiple
                        type="file"
                        name="moreImage"
                        className="d-block mt-3"
                        onChange={(event) =>
                          setSelectedMoreFile(event.target.files)
                        }
                        // required
                      />
                    </div>

                    <div className="col-4"></div>
                    <button type="submit" className="btn btn-primary mr-2">
                      Cập nhật
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default EditProduct1;
