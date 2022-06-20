import { React, useEffect, useState } from "react";
import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";
import InformationApi from "../../api/InformationApi";

function Footer() {
  const [information, setInformation] = useState({});
  useEffect(() => {
    const fetchInfor = async () => {
      try {
        const response = await InformationApi.getById(
          "62b0756892dfc7d99e74b340"
        );
        const data = JSON.parse(JSON.stringify(response));
        // setInformation(data);
        if(!data.error){
        setInformation(data.inforCompany)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchInfor();
  }, []);
  //
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="700"
      className="footer-container"
    >
      <div className="background-footer">
        <div className="content-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ">
                <h4 className="title-ft">Liên hệ</h4>
                <h3 className="txt-ft">{information.name}</h3>
                <ul className="custome-ul-left">
                  <li className=" txt-li">
                    Địa chỉ: {information.address}
                  </li>
                  <li className="txt-li">Hotline: {information.phone}</li>
                  <li className="txt-li">Email: {information.email}</li>
                </ul>
              </div>
              <div className="col-md-6 ">
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
