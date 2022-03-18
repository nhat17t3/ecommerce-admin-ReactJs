import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";
import { changePassword } from "../../actions";



function ChangePass(props) {
  const dispatch = useDispatch();
  const history = useHistory();

   // const [username, setUsername] = useState("");
   const [oldPass , setOldPass] = useState("");
   const [newPass , setNewPass] = useState("");
   const [newPass2,setNewPass2] = useState("");

 

  const changePass = (e) => {
    e.preventDefault();
    const send = {
      oldPass,
      newPass,
    };

    console.log(send);
    if(newPass != newPass2) alert("mật khẩu mới không khớp");

   else  dispatch(changePassword(send));

   setNewPass("");
   setNewPass2("");
   setOldPass("");
  };

  return (
    <>
      <Layout>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card offset-md-3">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title text-center">Đổi mật khẩu</h3>
                  {/* <p className="card-description">Basic form layout</p> */}
                  <form className="forms-sample" onSubmit={changePass}>
                    <div className="form-group">
                      <label htmlFor="name">Mật khẩu cũ</label>
                      <input
                        type="password"
                        name="oldPass"
                        className="form-control"
                        placeholder=""
                        value={oldPass}
                        onChange={(e) => setOldPass(e.target.value)}
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="description">Mật khẩu mới</label>
                      <input
                        type="password"
                        name="newPass"
                        className="form-control"
                        placeholder=""
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                        required
                      />
                    </div>

                    <div class="form-group">
                      <label for="description">Nhập lại mật khẩu mới</label>
                      <input
                        type="password"
                        name="newPass2"
                        className="form-control"
                        placeholder=""
                        value={newPass2}
                        onChange={(e) => setNewPass2(e.target.value)}
                        required
                        
                      />
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

export default ChangePass;
