import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createTransporter } from "../../../actions/transporter.actions";
import Layout from "../../../components/Layout";
import { getListTransporter } from "../../../actions/transporter.actions";

AddTransporter.propTypes = {};

function AddTransporter(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fee, setFee] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      name,
      description,
      fee,
      isActive,
    };

    await dispatch(createTransporter(form));

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
                  <h3 className="card-title text-center">Thêm phương thức giao hàng</h3>
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
                    

                    {/* <div class="form-group">
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

export default AddTransporter;
