import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
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
    const loginInfo = {
      email: username,
      password,
    };

    // alert(JSON.stringify(send));
    dispatch(login(loginInfo));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  if (auth.authenticating) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <div className="">
        <div className="login-box" style={{ background: "#d2d6de" }}>
          <div className="login-logo" style={{ margin: "0" }}>
            <a href="#">
              <b>Sign In</b>
            </a>
          </div>
          {/* /.login-logo */}
          <div className="login-box-body" style={{ background: "#d2d6de" }}>
            <form method="post" onSubmit={loginUser}>
              <div className="form-group has-feedback">
                <input
                  type="text"
                  name="username"
                  className="form-control form-control-lg"
                  placeholder="Tên đăng nhập hoặc Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <span className="glyphicon glyphicon-envelope form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <input
                  type="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="glyphicon glyphicon-lock form-control-feedback" />
              </div>
              <div className="row">
                <div className="col-xs-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-flat"
                  >
                    Submit
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <div className="social-auth-links text-center">
              <p>- OR -</p>
              <a
                href="#"
                className="btn btn-block btn-social btn-facebook btn-flat"
              >
                <i className="fa fa-facebook" /> Sign in using Facebook
              </a>
              <a
                href="#"
                className="btn btn-block btn-social btn-google btn-flat"
              >
                <i className="fa fa-google-plus" /> Sign in using Google+
              </a>
            </div>
            {/* <a href="#">I forgot my password</a>
    <br />
    <a href="register.html" className="text-center">
      Register a new membership
    </a> */}
          </div>
          {/* /.login-box-body */}
        </div>
      </div>
    </>
  );
}
export default Login;
