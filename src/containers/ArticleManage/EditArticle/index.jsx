import React, { useEffect, useState } from "react";
// import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getListCategoryArticle } from "../../../actions";
import {
  getArticleById,
  updateArticle,
} from "../../../actions/article.actions";
import Layout from "../../../components/Layout";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

EditArticle.propTypes = {};

EditArticle.defaultProps = {};

function EditArticle(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { articleId } = useParams();

  const [name, setName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [categoryArticleId, setCategoryArticleId] = useState("");
  // const [isHot, setIsHot] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState("");
  const changeHandlerFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    dispatch(getListCategoryArticle());
  }, []);

  const listCate = useSelector(
    (state) => state.categoryArticle.listCategoryArticle
  );

  useEffect(() => {
    dispatch(getArticleById(+articleId));
  }, []);

  const findItem = useSelector((state) => state.article.article);

  useEffect(() => {
    if (findItem) {
      setName(findItem.name);
      setShortDesc(findItem.shortDesc);
      setDescription(findItem.description);
      setCategoryArticleId(findItem.categoryArticle?.id);
      // setIsHot(findItem.isHot);
      setIsActive(findItem.isActive);
      setImage(findItem.image);
    }
  }, [findItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const form = {
    //   name,
    //   shortDesc,
    //   description,
    //   categoryArticleId,
    //   isHot,
    //   isActive,
    // };

    const formData = new FormData();
    formData.append("name", name);
    formData.append("shortDesc", shortDesc);
    formData.append("description", description);
    formData.append("categoryArticleId", categoryArticleId);
    // formData.append("isHot", isHot);
    formData.append("isActive", isActive);
    if (selectedFile !== null) formData.append("image", selectedFile);

    await dispatch(updateArticle(+articleId, formData));

    history.goBack();
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card ">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title text-center">Cập nhật bài viết</h3>
                  {/* <p className="card-description">Basic form layout</p> */}
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Tiêu đề</label>
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

                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect2">
                        Danh mục bài viết
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect2"
                        name="categoryArticleId"
                        onChange={(e) => setCategoryArticleId(e.target.value)}
                        value={categoryArticleId}
                        required
                      >
                        <option value={""} hidden>
                          --chọn danh mục--
                        </option>
                        {listCate?.map((item) => (
                          <option value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>

                    <div class="form-group">
                      <label for="shortDesc">Mô tả ngắn</label>
                      <textarea
                        class="form-control"
                        id="shortDesc"
                        rows="4"
                        name="shortDesc"
                        value={shortDesc}
                        onChange={(e) => setShortDesc(e.target.value)}
                        required
                      >
                        {shortDesc}
                      </textarea>
                    </div>

                    {/* <div class="form-group">
                      <label for="description">Mô tả</label>
                      <textarea
                        class="form-control"
                        id="description"
                        rows="4"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      >
                        {description}
                      </textarea>
                    </div> */}
                    <div for="specification">Nội dung</div>

                    <SunEditor
                      onChange={(content) => setDescription(content)}
                      setContents={description}
                      name="description"
                      setOptions={{
                        height: 800,
                        buttonList: buttonList.complex,
                      }}
                    />

                    <div className="form-group col-12">
                      <img src={image}></img>
                      <label style={{ display: "block" }}>Hình ảnh chính</label>
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

                      {/* <div class="form-group">
                      <p class="">bài viết HOT</p>
                    
                      <label className="switch switch-default switch-pill switch-danger mr-2">
                        <input
                          type="checkbox"
                          className="switch-input"
                          name="isHot"
                          value={isHot}
                          onChange={() => setIsHot(!isHot)}
                          checked={isHot}
                        />
                        <span className="switch-label" />
                        <span className="switch-handle" />
                      </label>
                    </div> */}

                    <div class="form-group">
                      <p class="">kích hoạt</p>
                      <label className="switch switch-default switch-pill switch-success mr-2">
                        <input
                          type="checkbox"
                          className="switch-input"
                          name="isActive"
                          value={isActive}
                          onChange={() => setIsActive(!isActive)}
                          checked={isActive}
                        />
                        <span className="switch-label" />
                        <span className="switch-handle" />
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary mr-2">
                      Cập nhật
                    </button>
                    {/* <button className="btn btn-light">Hủy</button> */}
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

export default EditArticle;
