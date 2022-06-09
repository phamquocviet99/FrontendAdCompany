import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="background-footer">
        <div className="content-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <h4 className="title-ft">Liên hệ</h4>
                <h3 className="txt-ft">CÔNG TY CỔ PHẦN ĐẦU TƯ L.A.D</h3>
                <ul className="custome-ul-left">
                  <li className=" txt-li">
                    Địa chỉ: D20, KDC Phước Nguyễn Hưng, Nguyễn Hữu Thọ, Ấp 5,
                    Xã Phước Kiển, Huyện Nhà Bè, Tp.Hồ Chí Minh
                  </li>
                  <li className="txt-li">Hotline: 0903.699.664</li>
                  <li className="txt-li">Email: Lad.jsc168@gmail.com</li>
                </ul>
              </div>
              <div className="col-md-6 col-xs-12">
                <h4 className="title-ft">Dịch vụ</h4>
                <ul className="custome-ul-right">
                  <li className="txt-li">
                    <i className=" icon-ft fa fa-circle " />
                    <a className="a-custome" href="/">
                      Thiết kế cảnh quan
                    </a>
                  </li>
                  <li className="txt-li">
                    <i className=" icon-ft fa fa-circle " />
                    <a className="a-custome" href="/">
                      Thiết kế kiến trúc-nội thất
                    </a>
                  </li>
                  <li className="txt-li">
                    <i className=" icon-ft fa fa-circle " />
                    <a className="a-custome" href="/">
                      Thi công cảnh quan
                    </a>
                  </li>
                  <li className="txt-li">
                    <i className=" icon-ft fa fa-circle " />
                    <a className="a-custome" href="/">
                      Cung cấp cây xanh công trình
                    </a>
                  </li>
                  <li className="txt-li">
                    <i className=" icon-ft fa fa-circle " />
                    <a className="a-custome" href="/">
                      Chăm sóc bảo dưỡng cảnh quan
                    </a>
                  </li>
                  <li className="txt-li">
                    <i className=" icon-ft fa fa-circle " />
                    <a className="a-custome" href="/">
                      Cung cấp & cho thuê cây nội thất
                    </a>
                  </li>
                  <li className="txt-li">
                    <i className=" icon-ft fa fa-circle " />
                    <a className="a-custome" href="/">
                      Cung cấp vật tư cảnh quan
                    </a>
                  </li>
                  <li className="txt-li">
                    <i className=" icon-ft fa fa-circle " />
                    <a className="a-custome" href="/">
                      Cung cấp cá Koi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom-ft">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-xs-12">
                  <p className="txt-bottom-ft">
                    Copyright © 2018 L.A.D JSC, Vietnam. All Rights Reserved.
                  </p>
                  <p className="txt-bottom-ft">
                    Designed by <a href="/">HBB Tech</a>
                  </p>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <div className="row text-center">
                    {" "}
                    <div className="circle-icon">
                      <i className="icon-bottom-ft fa fa-facebook" />
                    </div>
                    <div className="circle-icon">
                      <i className="icon-bottom-ft fa fa-google" />
                    </div>
                    <div className="circle-icon">
                      <i className="icon-bottom-ft fa fa-twitter" />
                    </div>
                    <div className="circle-icon">
                      <i className="icon-bottom-ft fa fa-youtube" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
