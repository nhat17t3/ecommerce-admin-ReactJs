import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createCategory } from "../../../actions/category.actions";
import Layout from "../../../components/Layout";
import { getListCategory } from "../../../actions/category.actions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

AddSubCategory.propTypes = {};

function AddSubCategory(props) {
  const dispatch = useDispatch();
  const history = useHistory();


  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [parentId , setParentId] = useState(0)

  useEffect(() => {
    dispatch(getListCategory());
  }, []);

  const listCate = useSelector((state) => state.category.listCategory);
  const listParentCategory = listCate.filter((p) => p.parentId == 0)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      name,
      slug: "",
      isActive,
      parentId,
    };

    await dispatch(createCategory(form));

    history.push("/categories/list-sub-cate");
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card offset-md-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Thêm danh mục</h4>
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
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect2">
                        Danh mục cha
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect2"
                        name="parentId"
                        onChange={(e) => setParentId(e.target.value)}
                        value={parentId}
                        required
                      >
                        <option value={0} hidden>khong có gì</option>
                        {listParentCategory?.map((item) => (
                          <option value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>

                    {/* <div class="form-group">
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
                    </div> */}

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

export default AddSubCategory;
