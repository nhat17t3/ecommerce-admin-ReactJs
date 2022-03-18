import React, { useEffect, useState } from "react";
// import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getSlideById } from "../../../actions";
import { updateSlide, getListSlide } from "../../../actions/slide.actions";
import Layout from "../../../components/Layout";

EditSlide.propTypes = {};

EditSlide.defaultProps = {};

function EditSlide(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { slideId } = useParams();

  const [name, setName] = useState("");
  const [sort, setSort] = useState(0);
  const [link, setLink] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(getSlideById(+slideId));
  }, []);

  const findItem = useSelector((state) => state.slide.slide);

  useEffect(() => {
    if (findItem) {
      setName(findItem.name);
      setSort(findItem.sort);
      setLink(findItem.link);
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
		formData.append('sort', sort);
		formData.append('link', link);
		formData.append('isActive', isActive);
    if (selectedFile !== null) formData.append("image", selectedFile);

    await dispatch(updateSlide(Number(slideId), formData));
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
                <h3 className="card-title text-center">Cập nhật Slide</h3>
                {/* <p className="card-description">Basic form layout</p> */}
                <form className="forms-sample" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Tên Slide</label>
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
                    <label htmlFor="name">Thứ tự slide</label>
                    <input
                      type="number"
                      name="sort"
                      className="form-control"
                      id="sort"
                      placeholder=""
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Link liên kết</label>
                    <input
                      type="text"
                      name="link"
                      className="form-control"
                      id="link"
                      placeholder=""
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      required
                    />
                  </div>
            
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

export default EditSlide;
