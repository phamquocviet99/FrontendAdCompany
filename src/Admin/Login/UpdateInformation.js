import { React, useEffect, useState } from "react";
import "./Login.css";
import userApi from "../../api/userApi";

import { useNavigate } from "react-router-dom";

function UpdateInfor() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    id: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem("user");
      navigate("/dang-nhap");
      window.location.reload();
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    setUser({
      name: currentUser.name,
      email: currentUser.email,
      id: currentUser.id,
    });
  }, []);
  async function updateUser() {
    if (user.email === "" || user.name === "") {
      alert("Bạn phải nhập đủ thông tin");
    } else {
      try {
        const response = await userApi.update(user.id, user);
        const userData = JSON.parse(JSON.stringify(response));
        if (!userData.error) {
          setIsSuccess(true);
        } else {
          alert(userData.message);
        }
      } catch (error) {
        alert("Cập nhật không thành công");
      }
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser();
  };
  //handle inputtext
  function handleChangeName(e) {
    setUser({ ...user, name: e.target.value });
  }
  function handleChangeEmail(e) {
    setUser({ ...user, email: e.target.value });
  }
  return (
    <div className="form-login">
      <div className="background-img-login">
        <div className="container-login">
          <h2 style={{ fontSize: "25px" }}>Cập nhật thông tin</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label style={{ fontSize: "16px" }}>Email</label>
              <input
                value={user?.email}
                onChange={handleChangeEmail}
                type="email"
                className="form-control input-login"
                placeholder="email"
              />
            </div>
            <div className="form-group">
              <label style={{ fontSize: "16px" }}>Tên người dùng</label>
              <input
                onChange={handleChangeName}
                value={user?.name}
                className="form-control input-login "
                placeholder="name"
              />
            </div>
            <button
              type="submit"
              id="login"
              style={{ fontSize: "16px", marginRight: "20px", padding: "10px" }}
              className="btn btn-success"
            >
              Cập nhật
            </button>
            <a
              href="/admin/doi-mat-khau"
              style={{ fontSize: "16px", padding: "10px", marginRight: "20px" }}
              className="btn btn-primary"
            >
              Đổi mật khẩu
            </a>
            <a
              href="/admin"
              style={{ fontSize: "16px", padding: "10px" }}
              className="btn btn-danger"
            >
              Hủy bỏ
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateInfor;
