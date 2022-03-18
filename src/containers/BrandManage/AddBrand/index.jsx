import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBrand } from "../../../actions/brand.actions";
import Layout from "../../../components/Layout";

AddBrand.propTypes = {};

function AddBrand(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const changeHandlerFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("slug", "");
    formData.append("isActive", isActive);
    formData.append("image", selectedFile);

    console.log("file", formData);

    await dispatch(createBrand(formData));

    history.push("/brands/list");
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card offset-md-3">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title text-center">Thêm thương hiệu</h3>
                  {/* <p className="card-description">Basic form layout</p> */}
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Tên thương hiệu</label>
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
                    {/* <div class="form-group">
                      <label for="description">đường dẫn</label>
                      <input
                        type="text"
                        name="slug"
                        className="form-control"
                        id="slug"
                        placeholder=""
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        required
                      />
                    </div> */}

                    <div className="form-group">
                      <label style={{ display: "block" }}>Hình ảnh</label>
                      <input
                        type="file"
                        name="img[]a"
                        className=""
                        onChange={changeHandlerFile}
                        required
                      />
                      {/* <div className="input-group col-xs-12">
                        <input
                          type="text"
                          className="form-control file-upload-info"
                          disabled
                          placeholder="Upload Image"
                        />
                        <span className="input-group-append">
                          <button
                            className="file-upload-browse btn btn-primary"
                            type="button"
                          >
                            Upload
                          </button>
                        </span>
                      </div> */}
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

export default AddBrand;
