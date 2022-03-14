import React, { useEffect, useState } from "react";
// import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateBrand, getListBrand } from "../../../actions/brand.actions";
import Layout from "../../../components/Layout";

EditBrand.propTypes = {};

EditBrand.defaultProps = {};

function EditBrand(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { brandId } = useParams();

  const [name, setName] = useState("");
  // const [slug, setSlug] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(getListBrand());
  }, []);

  const findItem = useSelector((state) =>
    state.brand.listBrand.find((x) => x.id === +brandId)
  );


  useEffect(() => {
    if (findItem) {
      setName(findItem.name);
      // setSlug(findItem.slug);
      setIsActive(findItem.isActive);
      setImage(findItem.image);
    }
  }, [findItem]);

  const changeHandlerFile = (event) => {
    setSelectedFile(event.target.files[0]);
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

		formData.append('name', name);
		formData.append('slug', "slug");
		formData.append('isActive', isActive);
    if(selectedFile !== null) formData.append('image', selectedFile);

    await dispatch(updateBrand(Number(brandId),formData));
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
                  <h4 className="card-title">Cập nhật thương hiệu</h4>
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
                      <label for="description">Đường dẫn</label>
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



                    <div>
                      <img src={image} alt="logo brand" style={{width : 100, height : 100}}/>
                    </div>
                    <div className="form-group">
                    <label style={{display: "block"}}>Hình ảnh</label>
                      <input
                        type="file"
                        name="img[]a"
                        className=""
                        onChange={changeHandlerFile}
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
                      Gửi
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

export default EditBrand;
