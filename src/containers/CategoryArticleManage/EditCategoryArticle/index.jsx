import React, { useEffect, useState } from "react";
// import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getTransportById } from "../../../actions";
import {
  updateCategoryArticle,
  getCategoryArticleById,
} from "../../../actions/categoryArticle.actions";
import Layout from "../../../components/Layout";

EditCategoryArticle.propTypes = {};

EditCategoryArticle.defaultProps = {};

function EditCategoryArticle(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { categoryArticleId } = useParams();

  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    dispatch(getCategoryArticleById(+categoryArticleId));
  }, []);

  const findItem = useSelector((state) => state.categoryArticle.categoryArticle);

  useEffect(() => {
    if (findItem) {
      setName(findItem.name);
      setIsActive(findItem.isActive);
    }
  }, [findItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      name,
      isActive,
    };

    dispatch(updateCategoryArticle(Number(categoryArticleId),form));
    history.goBack();
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card offset-md-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Thêm danh mục bài viết</h4>
                  {/* <p className="card-description">Basic form layout</p> */}
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Tên danh mục</label>
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

                   

                   
                    <div class="form-group">
                      <p class="">Kích hoạt</p>
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

export default EditCategoryArticle;
