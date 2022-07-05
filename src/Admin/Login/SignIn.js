import { React, useEffect, useState } from "react";
import "./Login.css";
import userApi from "../../api/userApi";

import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "1",
    name: "",
    email: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (isSuccess) {
      navigate("/admin/nguoi-dung");
      window.location.reload();
    }
  }, [isSuccess, navigate]);
  async function adduser() {
    if (user.emai === "" || user.username === "" || user.name === "") {
      alert("Bạn phải nhập đủ thông tin");
    } else {
      try {
        const response = await userApi.create(user);
        const userData = JSON.parse(JSON.stringify(response));
        if (!userData.error) {
          setIsSuccess(true);
        } else {
          alert(userData.message);
        }
      } catch (error) {
        alert("Tên người dùng đã có người sử dụng hoặc thêm không thành công");
      }
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    adduser();
  };
  //handle inputtext
  return (
    <div className="form-login">
      <div className="background-img-login">
        <div className="container-login">
          <h2 style={{ fontSize: "25px" }}>Thêm người dùng mới</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label style={{ fontSize: "16px" }}>Tên đăng nhập</label>
              <input
                onChange={(e) => {
                  setUser({ ...user, username: e.target.value });
                }}
                type="text"
                className="form-control input-login"
                placeholder="username"
              />
            </div>
            <div className="form-group">
              <label style={{ fontSize: "16px" }}>Email</label>
              <input
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
                type="email"
                className="form-control input-login"
                placeholder="email"
              />
            </div>
            <div className="form-group">
              <label style={{ fontSize: "16px" }}>Tên người dùng</label>
              <input
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
                type="text"
                className="form-control input-login "
                placeholder="name"
              />
            </div>
            <div className="form-group">
              <label style={{ fontSize: "16px", fontWeight: "600" }}>
                Lưu ý mật khẩu mặc định là : 1
              </label>
            </div>

            <button
              type="submit"
              id="login"
              style={{ fontSize: "16px" }}
              className="btn btn-primary btn-login"
            >
              Thêm người dùng
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
