import React, { useEffect, useState } from "react";
// import MultiSelect from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getTransportById } from "../../../actions";
import {
  updateTransporter,
  getTransporterById,
} from "../../../actions/transporter.actions";
import Layout from "../../../components/Layout";

EditTransporter.propTypes = {};

EditTransporter.defaultProps = {};

function EditTransporter(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { transporterId } = useParams();

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    dispatch(getTransporterById(+transporterId));
  }, []);

  const findItem = useSelector((state) => state.transporter.transporter);

  useEffect(() => {
    if (findItem) {
      setName(findItem.name);
      setLink(findItem.link);
      setIsActive(findItem.isActive);
    }
  }, [findItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      name,
      link,
      isActive,
    };

    dispatch(updateTransporter(Number(transporterId),form));
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
                  <h4 className="card-title">Thêm đơn vị vận chuyển</h4>
                  {/* <p className="card-description">Basic form layout</p> */}
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Tên đơn vị vận chuyển</label>
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
                      <label htmlFor="name">Link tra cứu</label>
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

                   
                    <div class="form-group">
                      <p class="">Kích hoạt</p>
                      <label class="toggle-switch toggle-switch-success">
                        <input
                          type="checkbox"
                          name="isActive"
                          value={isActive}
                          onChange={() => setIsActive(!isActive)}
                          checked={isActive}
                        />
                        <span class="toggle-slider round"></span>
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

export default EditTransporter;
