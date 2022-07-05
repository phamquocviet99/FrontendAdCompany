import { React, useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = ({ openSidebar }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    // setUser(localStorage.getItem("user"));

    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const navigate = useNavigate();
  function LogOut() {
    localStorage.removeItem("user");
    navigate("/dang-nhap");
    window.location.reload();
  }

  return (
    <div className="tool-bar">
      <div style={{display:"flex"}}>
        <div className="burger" onClick={openSidebar}>
          <i style={{ fontSize: "30px", marginTop:"5px" }} className="fa fa-bars"></i>
        </div>
        <div className="title-admin">Trang quản trị</div>
      </div>

      <div style={{ display: "flex" }}>
        <h2 style={{ marginRight: "20px", marginTop: "10px" }}>{user.name}</h2>
  
        <a
          href="/admin/cap-nhap-thong-tin"
          style={{ fontSize: "16px", marginRight: "20px" }}
          className="btn btn-success"
        >
          Sửa thông tin
        </a>
        <button
          onClick={LogOut}
          style={{ fontSize: "16px" }}
          className="btn btn-danger"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};
export default Header;
