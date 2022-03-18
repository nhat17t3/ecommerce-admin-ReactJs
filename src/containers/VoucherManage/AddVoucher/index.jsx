import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createVoucher } from "../../../actions/voucher.actions";
import Layout from "../../../components/Layout";
import { getListVoucher } from "../../../actions/voucher.actions";
import userReducers from "../../../reducers/user.reducers";

AddVoucher.propTypes = {};

function AddVoucher(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [minOrderValue, setMinOrderValue] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [value, setValue] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");
  const [isActive, setIsActive] = useState(true);

  

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const start = new Date(startAt);
    const end = new Date(endAt);
    if(start.getTime() <  end.getTime() ) {

    
    const form = {
      code,
      name,
      type,
      minOrderValue,
      maxPrice,
      value,
      quantity,
      startAt,
      endAt,
      isActive,
    };
    console.log(form);

    await dispatch(createVoucher(form));

    history.goBack();
  }else alert("ngày tháng không hợp lệ")
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card offset-md-3">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title text-center">Thêm voucher</h3>
                  {/* <p className="card-description">Basic form layout</p> */}
                  <form className="forms-sample" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Mã voucher</label>
                      <input
                        type="text"
                        name="code"
                        className="form-control"
                        id="code"
                        placeholder=""
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Tên voucher</label>
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
                        Loại giảm giá
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect2"
                        name="type"
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                      >
                        <option value={"0"}>giảm theo phần trăm</option>
                        <option value={"1"}>giảm theo tiền mặt</option>
                        
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">giá trị đơn hàng tối thiểu</label>
                      <input
                        type="number"
                        name="minOrderValue"
                        className="form-control"
                        id="minOrderValue"
                        placeholder=""
                        value={minOrderValue}
                        onChange={(e) => setMinOrderValue(e.target.value)}
                        required
                      
                      />
                    </div>
                    
                    {/* {type != "1" ? <div className="form-group">
                      <label htmlFor="name">giảm giá tối đa</label>
                      <input
                        type="number"
                        name="maxPrice"
                        className="form-control"
                        id="maxPrice"
                        placeholder=""
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        required
                      />
                    </div> : null} */}

                    <div className="form-group">
                      <label htmlFor="value">giá trị giảm</label>
                      <input
                        type="number"
                        name="value"
                        className="form-control"
                        id="value"
                        placeholder=""
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="quantity">số lượng voucher</label>
                      <input
                        type="number"
                        name="quantity"
                        className="form-control"
                        id="quantity"
                        placeholder=""
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="startAt">số lượng voucher</label>
                      <input
                        type="datetime-local"
                        name="startAt"
                        className="form-control"
                        id="startAt"
                        placeholder=""
                        value={startAt}
                        onChange={(e) => setStartAt(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="endAt">số lượng voucher</label>
                      <input
                        type="datetime-local"
                        name="endAt"
                        className="form-control"
                        id="endAt"
                        placeholder=""
                        value={endAt}
                        onChange={(e) => setEndAt(e.target.value)}
                        required
                      />
                    </div>

                   

                    <div class="form-group">
                      <p class="">kích hoạt</p>
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

export default AddVoucher;
