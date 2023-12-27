import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createCategory,
  getListCategory,
} from "../../../actions/category.actions";
import Layout from "../../../components/Layout";

AddCategory.propTypes = {};

function AddCategory(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [parentId, setParentId] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    dispatch(getListCategory());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      name,
      isActive,
      parentId,
    };

    await dispatch(createCategory(form));

    history.push("/categories/list");
  };

  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="box ">
              <div className="box-header with-border">
                <h3 className="card-title text-center">Thêm danh mục</h3>
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

export default AddCategory;
