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
   const [description, setDescription] = useState("");
  const [fee, setFee] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    dispatch(getTransporterById(+transporterId));
  }, []);

  const findItem = useSelector((state) => state.transporter.transporter);

  useEffect(() => {
    if (findItem) {
      setName(findItem.name);
      setDescription(findItem.description);
      setFee(findItem.fee);
      setIsActive(findItem.isActive);
    }
  }, [findItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      name,
      description,
      fee,
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
                  <h3 className="card-title text-center">Cập nhật phương thức giao hàng</h3>
                  {/* <p className="card-description">Basic form layout</p> */}
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Tên</label>
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
                      <label htmlFor="name">Phí vận chuyển </label>
                      <input
                        type="number"
                        name="fee"
                        className="form-control"
                        id="fee"
                        placeholder=""
                        value={fee}
                        onChange={(e) => setFee(e.target.value)}
                        required
                      />
                    </div>

                    <div class="form-group ">
                      <label for="description">Mô tả </label>
                      <textarea
                        class="form-control"
                        id="description"
                        rows="4"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      >
                        {description}
                      </textarea>
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

export default EditTransporter;
