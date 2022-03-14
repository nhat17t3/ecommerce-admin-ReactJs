import React, { useEffect, useState } from "react";
// import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateCategory, getListCategory } from "../../../actions/category.actions";
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

  
  const handleSubmit =  (e) => {
    e.preventDefault();
    const form = {
      id: Number(categoryId),
      name,
      slug: "",
      isActive,
      parentId : 0
      };
    console.log(form,"edit form");
    // alert(JSON.stringify(k));

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
                <h4 className="card-title">Cập nhật danh mục cha</h4>
                {/* <p className="card-description">Basic form layout</p> */}
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

                  {/* <div className="form-group">
                      <label htmlFor="exampleFormControlSelect2">
                        Danh mục cha
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect2"
                        name="parentId"
                        onChange={(e) => setParentId(e.target.value)}
                        value={parentId}
                      >
                        <option value={0}>khong có gì</option>
                        {listCate?.map((item) => (
                          <option value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div> */}

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

export default EditCategory;
