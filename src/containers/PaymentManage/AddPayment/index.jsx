import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPayment } from "../../../actions/payment.actions";
import Layout from "../../../components/Layout";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";


AddPayment.propTypes = {};

function AddPayment(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);

  const handleSubmit =  (e) => {
    e.preventDefault();
    const form = {
      name,
      description,
      isActive,
    };

    dispatch(createPayment(form));

    history.push("/payments/list");
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card offset-md-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Thêm phương thức thanh toán</h4>
                  {/* <p className="card-description">Basic form layout</p> */}
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Tên phương thức thanh toán</label>
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
                      <label for="description">Mô tả</label>
                      <textarea
                        class="form-control"
                        id="description"
                        rows="4"
                        name="description"
                        // value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      >
                        {description}
                      </textarea>
                    </div> */}
                    <div for="specification">Mô tả</div>
                    <SunEditor
                      onChange={(content) => setDescription(content)}
                      setContents={description}
                      name="description"
                      setOptions={{
                        height: 300,
                        buttonList: buttonList.complex,
                      }}
                    />

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

export default AddPayment;
