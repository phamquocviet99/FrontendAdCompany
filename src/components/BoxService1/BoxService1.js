import React from "react";
import "./BoxService1.css";
import Aos from "aos";
import "aos/dist/aos.css";
function BoxService1({service}) {
  return (
    <div className="content-service-box" style={{margin:"10px 0"}}>
      <div className="row">
        <div
          className="col-md-6"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <div className="img-service-1">
            <img
              alt=""
              src={service?.image1 }
            ></img>
          </div>
        </div>
        <div
          className="col-md-6"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <div className="img-service-2">
            <img
              alt=""
              src={service?.image2 }
            ></img>
            <div className="service-title">
              <h2>{service?.name}</h2>
              <p>
              {service?.summary}
              </p>
              <div className="text-center" style={{ marginTop: "15px" }}>
                <a href={service?.link} className="btn btn-outline-success">XEM THÊM</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxService1;
