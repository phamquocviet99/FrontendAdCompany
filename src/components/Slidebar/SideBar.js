import React from "react";
import "./Header.css";

const SideBar = ({ sidebar }) => {
  return (
    <div className={sidebar ? "side-bar side-bar--open" : "side-bar"}>
       <a href="/">
        <i className="fa fa-home"></i>Thông tin công ty
      </a >
      <a href="/">
        <i className="fa fa-home"></i>Danh mục dự án
      </a >
      <a href="/">
        <i className="fa fa-home"></i>Dự án
      </a>
      <a href="/">
        <i className="fa fa-home"></i>Danh mục sản phẩm
      </a>
      <a href="/">
        <i className="fa fa-home"></i>Sản phẩm
      </a>
      <a href="/">
        <i className="fa fa-home"></i>Tin tức
      </a>
      <a href="/">
        <i className="fa fa-home"></i>Tuyển dụng
      </a>
    </div>
  );
};

export default SideBar;
