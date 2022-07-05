import React from "react";

function NotRegister() {
  return (
    <div style={{ textAlign: "center", margin:"100px" }}>
      <h1>BẠN CẦN PHẢI ĐĂNG NHẬP ĐỂ THỰC HIỆN VIỆC QUẢN TRỊ</h1>
      <a
        href="/dang-nhap"
        style={{ fontSize: "16px", marginTop:"20px" }}
        className="btn btn-primary"
      >
        Đăng nhập
      </a>
    </div>
  );
}

export default NotRegister;
