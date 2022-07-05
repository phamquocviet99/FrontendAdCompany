import { React, useEffect, useState } from "react";
import "./Login.css";
import userApi from "../../api/userApi";

import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();
  const [userChange, setUserChange] = useState({
    username: "",
    password: "",
    newpassword: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem("user");
      navigate("/dang-nhap");
      window.location.reload();
    }
  }, [isSuccess, navigate]);
  async function changePassword() {
    if (
      userChange.newpassword === "" ||
      userChange.username === "" ||
      userChange.password === "" ||
      userChange.password === userChange.newpassword
    ) {
      alert("Bạn phải nhập đủ thông tin, mật khẩu cũ không giống mật khẩu mới");
    } else {
      try {
        const response = await userApi.change(userChange);
        const userData = JSON.parse(JSON.stringify(response));
        if (!userData.error) {
          setIsSuccess(true);
        } else {
          alert(userData.message);
        }
      } catch (error) {
        alert("Đổi mật khẩu không thành công");
      }
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    changePassword();
  };
  //handle inputtext
  return (
    <div className="form-login">
      <div className="background-img-login">
        <div className="container-login">
          <h2 style={{ fontSize: "25px" }}>ĐỔI MẬT KHẨU</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label style={{ fontSize: "16px" }}>Tên đăng nhập</label>
              <input
                onChange={(e) => {
                  setUserChange({ ...userChange, username: e.target.value });
                }}
                type="text"
                className="form-control input-login"
                placeholder="username"
              />
            </div>
            <div className="form-group">
              <label style={{ fontSize: "16px" }}>Mật khẩu cũ</label>
              <input
                onChange={(e) => {
                  setUserChange({ ...userChange, password: e.target.value });
                }}
                type="password"
                className="form-control input-login"
                placeholder="old-password"
              />
            </div>
            <div className="form-group">
              <label style={{ fontSize: "16px" }}>Mật khẩu mới</label>
              <input
                onChange={(e) => {
                  setUserChange({ ...userChange, newpassword: e.target.value });
                }}
                type="password"
                className="form-control input-login "
                placeholder="new-password"
              />
            </div>

            <button
              type="submit"
              id="login"
              style={{ fontSize: "16px" }}
              className="btn btn-primary btn-login"
            >
              Đổi mật khẩu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
