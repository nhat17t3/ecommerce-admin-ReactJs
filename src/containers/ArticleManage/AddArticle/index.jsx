import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createArticle } from "../../../actions/article.actions";
import Layout from "../../../components/Layout";
import { getListArticle } from "../../../actions/article.actions";
import userReducers from "../../../reducers/user.reducers";
import { getListCategoryArticle } from "../../../actions";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

AddArticle.propTypes = {};

function AddArticle(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [categoryArticleId, setCategoryArticleId] = useState(0);
  const [isHot, setIsHot] = useState(true);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    dispatch(getListCategoryArticle());
  }, []);

  const listCate = useSelector(
    (state) => state.categoryArticle.listCategoryArticle
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      name,
      shortDesc,
      description,
      categoryArticleId,
      isHot,
      isActive,
    };

    await dispatch(createArticle(form));

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
                  <h4 className="card-title">Thêm bài viết</h4>
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
                          khong có gì
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

                    <div class="form-group">
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
                    </div>

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
                      Thêm
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

export default AddArticle;
