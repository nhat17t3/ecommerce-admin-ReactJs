import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { getListCategoryArticle } from "../../../actions";
import {
  createArticle,
  getArticleById,
  updateArticle,
} from "../../../actions/article.actions";
import Layout from "../../../components/Layout";

AddArticle.propTypes = {};

function AddArticle(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { articleId } = useParams();

  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");
  const [categoryArticleId, setCategoryArticleId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePathArticle, setImagePathArticle] = useState("");

  useEffect(() => {
    dispatch(getListCategoryArticle());
  }, []);

  const listCategory = useSelector(
    (state) => state.categoryArticle.listCategoryArticle
  );

  useEffect(() => {
    dispatch(getArticleById(Number(articleId)));
  }, []);

  const findItem = useSelector((state) => state.article.article);

  useEffect(() => {
    if (findItem) {
      setName(findItem.name);
      setContent(findItem.content);
      setShortDescription(findItem.shortDescription);
      setCategoryArticleId(findItem.categoryArticle?.id);
      setImagePathArticle(findItem.imagePath)
    }
  }, [findItem]);

  const changeHandlerFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("shortDescription", shortDescription);
    formData.append("content", content);
    formData.append("categoryArticleId", categoryArticleId);
    if (selectedFile !== null) formData.append("imagePath", selectedFile);

    await dispatch(updateArticle(articleId ,formData));

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
                <h3 className=" text-center">Thêm bài viết</h3>
                <form className="forms-sample " onSubmit={handleSubmit}>
                  <div className="form-group col-12">
                    <label htmlFor="name">Tên bài viết</label>
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
                    <label htmlFor="brand">Danh mục bài viết</label>
                    <select
                      className="form-control"
                      name="categoryId"
                      onChange={(e) => setCategoryArticleId(e.target.value)}
                      value={categoryArticleId}
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

                  <div className="form-group col-12">
                    <label for="shortDesc">Mô tả ngắn</label>
                    <textarea
                      class="form-control"
                      id="shortDesc"
                      rows="4"
                      name="shortDesc"
                      value={shortDescription}
                      onChange={(e) => setShortDescription(e.target.value)}
                      required
                    >
                      {shortDescription}
                    </textarea>
                  </div>

                  <div for="specification">Mô tả</div>

                  <SunEditor
                    onChange={(content) => setContent(content)}
                    setContents={content}
                    name="content"
                    setOptions={{
                      height: 500,
                      buttonList: buttonList.complex,
                    }}
                  />

                  <div className="form-group col-12">
                    <label style={{ display: "block" }}>Hình ảnh</label>
                    <img src={imagePathArticle} alt="ảnh bài viết" className="d-block" style={{width:100, marginBottom: 10}} />
                    <input
                      type="file"
                      name="imyy"
                      className=""
                      onChange={changeHandlerFile}
                      
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

export default AddArticle;
