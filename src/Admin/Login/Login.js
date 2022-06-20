import { React, useEffect, useState } from "react";
import "./Login.css";
import userApi from "../../api/userApi";

import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();
  function handleChangeUsername(e) {
    setUsername(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  useEffect(() => {
    if (isLogin) {
      navigate("/admin");
    }
  }, [isLogin, navigate]);
  async function Login(user) {
    try {
      const response = await userApi.login(user);
      const userData = JSON.parse(JSON.stringify(response));
      if (!userData.error) {
        localStorage.setItem("user", JSON.stringify(response));
        setIsLogin(true);
      }
    } catch (error) {
      alert("Đăng nhập không thành công");
    }
  }
  async function handleLogin() {
    const user = {
      username: username,
      password: password,
    };
    Login(user);
  }

  //handle inputtext
  return (
    <div className="form-login">
      <div className="background-img-login">
        <div className="container-login">
          <h2 style={{ fontSize: "25px" }}>ĐĂNG NHẬP</h2>
          <div className="form-group">
            <label style={{ fontSize: "16px" }}>Tên đăng nhập</label>
            <input
              onChange={handleChangeUsername}
              type="email"
              className="form-control input-login"
              placeholder="username"
            />
          </div>
          <div className="form-group">
            <label style={{ fontSize: "16px" }}>Mật khẩu</label>
            <input
              onChange={handleChangePassword}
              type="password"
              className="form-control input-login "
              placeholder="password"
            />
          </div>

          <button
            style={{ fontSize: "16px" }}
            className="btn btn-primary btn-login"
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
