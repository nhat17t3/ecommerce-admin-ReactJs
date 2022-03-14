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
  const [link, setLink] = useState("");
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      name,
      link,
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
                  <h4 className="card-title">Thêm nhà vận chuyển</h4>
                  {/* <p className="card-description">Basic form layout</p> */}
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Tên nhà vận chuyển</label>
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
                      <label htmlFor="name">Link tra cứu d</label>
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
