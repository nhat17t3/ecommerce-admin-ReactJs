import React, { useEffect, useState } from "react";
// import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  getListCategoryArticle,
  updateCategoryArticle,
} from "../../../actions/categoryArticle.actions";
import Layout from "../../../components/Layout";

EditCategoryArticle.propTypes = {};

EditCategoryArticle.defaultProps = {};

function EditCategoryArticle(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { categoryArticleId } = useParams();

  const [name, setName] = useState("");
  const [parentId, setParentId] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    dispatch(getListCategoryArticle());
  }, []);

  const listCate = useSelector(
    (state) => state.categoryArticle.listCategoryArticle
  );

  const findItem = useSelector((state) =>
    state.categoryArticle.listCategoryArticle.find(
      (x) => x.id === +categoryArticleId
    )
  );

  useEffect(() => {
    if (findItem) {
      setName(findItem.name);
      setParentId(findItem.parentId);
      setIsActive(findItem.isActive);
    }
  }, [findItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      id: Number(categoryArticleId),
      name,
      isActive,
      parentId: 0,
    };
    console.log(form, "edit form");

    dispatch(updateCategoryArticle(form));
    history.push("/categories/list");
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card offset-md-3">
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-3 text-center">
                    Cập nhật danh mục sản phẩm
                  </h3>
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Tên </label>
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

export default EditCategoryArticle;
