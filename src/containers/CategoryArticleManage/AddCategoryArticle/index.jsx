import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createCategoryArticle } from "../../../actions/categoryArticle.actions";
import Layout from "../../../components/Layout";

AddCategoryArticle.propTypes = {};

function AddCategoryArticle(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      name,
    };

    await dispatch(createCategoryArticle(form));

    history.goBack();
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

export default AddCategoryArticle;
