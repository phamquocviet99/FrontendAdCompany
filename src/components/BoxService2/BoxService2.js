import React from "react";
import "../BoxService1/BoxService1.css";
import Aos from "aos";
import "aos/dist/aos.css";

function BoxService2(props) {
  return (
    <div className="content-service-box" >
      <div className="row">
        <div className="col-md-6"data-aos="fade-right"
    data-aos-duration="2000"
    data-aos-delay="200">
          <div className="img-service-2">
            <img
              alt=""
              src={require("../../images/images/tknoithat-1.png")}
            ></img>
            <div className="service-title">
              <h2>thiết kế kiến trúc - nôi thất</h2>
              <p>
                L.A.D với phướng châm: - Tư vấn chi tiết - Chi phí hợp lý - Dự
                toán chặt chẽ - Thiết kế thiết thực
              </p>
              <div className="text-center" style={{ marginTop: "15px" }}>
                <button className="btn btn-outline-success">XEM THÊM</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6"data-aos="fade-left"
    data-aos-duration="2000"
    data-aos-delay="200">
          <div className="img-service-1">
            <img
              alt=""
              src={require("../../images/images/tknoithat-2.jpg")}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxService2;
