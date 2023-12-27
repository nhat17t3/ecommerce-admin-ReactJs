import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  getListCategory,
  updateCategory,
} from "../../../actions/category.actions";
import Layout from "../../../components/Layout";

EditCategory.propTypes = {};

EditCategory.defaultProps = {};

function EditCategory(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { categoryId } = useParams();

  const [name, setName] = useState("");
  const [parentId, setParentId] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    dispatch(getListCategory());
  }, []);

  const listCate = useSelector((state) => state.category.listCategory);

  const findItem = useSelector((state) =>
    state.category.listCategory.find((x) => x.id === +categoryId)
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
      id: Number(categoryId),
      name,
      isActive,
      parentId: 0,
    };
    console.log(form, "edit form");

    dispatch(updateCategory(form));
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

export default EditCategory;
