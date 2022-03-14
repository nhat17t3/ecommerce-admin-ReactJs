import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions";

Login.propTypes = {};
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const showError = auth.error;

  const loginUser = (e) => {
    e.preventDefault();
    const send = {
      usernameOrEmail: username,
      password,
    };

    // alert(JSON.stringify(send));
    dispatch(login(send));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  if (auth.authenticating) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <div className="container-scroller" >
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto" style={{marginTop:"150px"}}>
                <div className="auth-form-light text-left py-5 px-4 px-sm-5 card">
                  {/* <div className="brand-logo">
                    <img src="/assets/images/logo-dark.svg" alt="logo" />
                  </div> */}
                  <h3 className="text-center">Đăng nhập</h3>
                  {/* <h6 className="font-weight-light">Sign in to continue.</h6> */}
                  <form className="pt-3" action="" method="post" onSubmit={loginUser}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="username"
                        className="form-control form-control-lg"
                        placeholder="Tên đăng nhập hoặc Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mt-3">
                      <button
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        type="submit"
                      >
                        Gửi
                      </button>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      {/* <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          Keep me signed in
                          <i className="input-helper" />
                        </label>
                      </div> */}
                      <a href="#" className="auth-link text-black">
                        Quên mật khẩu ?
                      </a>
                    </div>
                    {/* <div className="mb-2">
                <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                  <i className="typcn typcn-social-facebook mr-2" />Connect using facebook
                </button>
              </div> */}
                    {/* <div className="text-center mt-4 font-weight-light">
                      Don't have an account?{" "}
                      <a href="#" className="text-primary">
                        Create
                      </a>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* content-wrapper ends */}
        </div>
        {/* page-body-wrapper ends */}
      </div>
    </>
  );
}
export default Login;
