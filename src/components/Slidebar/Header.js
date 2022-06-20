import React from "react";
import "./Header.css";

const Header = ({openSidebar}) => {
  return (
    <div className="tool-bar">
      <div className="burger" onClick={openSidebar}>
        <i style={{ fontSize: "30px" }} className="fa fa-bars"></i>
      </div>
      <div className="title-admin">Quản lý dữ liệu </div>
    </div>
  );
};
export default Header;
