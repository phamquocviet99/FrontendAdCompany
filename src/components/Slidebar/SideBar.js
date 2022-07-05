import React from "react";
import "./Header.css";

const SideBar = ({ sidebar }) => {
  return (
    <div className={sidebar ? "side-bar side-bar--open" : "side-bar"}>
      <a href="/admin/thong-tin">
        <i className="fa fa-home"></i>Thông tin công ty
      </a>
      <a href="/admin/danh-muc-du-an">
        <i className="fa fa-home"></i>Danh mục dự án
      </a>
      <a href="/admin/du-an">
        <i className="fa fa-home"></i>Dự án
      </a>
      <a href="/admin/danh-muc-san-pham">
        <i className="fa fa-home"></i>Danh mục sản phẩm
      </a>
      <a href="/admin/san-pham">
        <i className="fa fa-home"></i>Sản phẩm
      </a>
      <a href="/admin/tin-tuc">
        <i className="fa fa-home"></i>Tin tức
      </a>
      <a href="/admin/tuyen-dung">
        <i className="fa fa-home"></i>Tuyển dụng
      </a>
      <a href="/admin/doi-tac">
        <i className="fa fa-home"></i>Đối tác
      </a>
      <a href="/admin/nguoi-dung">
        <i className="fa fa-home"></i>Người dùng
      </a>
    </div>
  );
};

export default SideBar;
