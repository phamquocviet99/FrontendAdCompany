import { React, useEffect } from "react";

import { Carousel } from "react-bootstrap";
import "./Style/HomePage.css";
import Aos from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);


  return (
    <div className="content-home">
      <Carousel fade>
        <Carousel.Item interval={7000}>
          <div className="carousel-inner">
            <div className="item active">
              <img
                src={require("../images/images/slider-1559119307.jpg")}
                alt="Chania"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
          <div className="carousel-inner ">
            <div className="item active">
              <img
                src={require("../images/images/slider-1559119998.jpg")}
                alt="Chania"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="home-service">
        <div className="container">
          <div className="home-title">
            <p className="font-title-home">Dịch vụ của chúng tôi</p>
          </div>
          <div className="row">
            <div  data-aos="fade-right" className="col-md-8">
             
                <div className="row">
                  <div className="col-sm-6">
                    <div  className="txt-box-service">
                      <div className="title-inline">
                        <h2 className="title-inline">
                          <img
                          
                            style={{ marginRight: "5px" }}
                            alt=""
                            src={require("../images/images/service-icon-1526573283.png")}
                          />
                          Thiết kế cảnh quan
                        </h2>
                      </div>
                      <p className="txt-box-service ">
                        Thiết kế cảnh quan sẽ giúp mọi người có thể thấy trước
                        được không gian, khung cảnh sau khi thi công. Đồng thời
                        qua đó khách hàng có thể lựa chọn những mẫu, kiểu không
                        gian theo ý muốn của mình sao cho hài hòa mà ưng ý
                        nhất.&nbsp;
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="txt-box-service">
                      <div className="title-inline">
                        <h2 className="title-inline">
                          <img
                            style={{ marginRight: "5px" }}
                            alt=""
                            src={require("../images/images/service-icon-1526573283.png")}
                          />
                          THIẾT KẾ KIẾN TRÚC - NỘI THẤT
                        </h2>
                      </div>
                      <p className="txt-box-service ">
                        L.A.D với đội ngũ Kiến Trúc Sư giàu kinh nghiệm và
                        chuyên viên thiết kế có chuyên môn cao, giàu ý tưởng
                        sáng tạo sẽ đem đến cho bạn một sản phẩm hoàn hảo nhất.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="txt-box-service">
                      <div className="title-inline">
                        <h2 className="title-inline">
                          <img
                            style={{ marginRight: "5px" }}
                            alt=""
                            src={require("../images/images/service-icon-1526573283.png")}
                          />
                          THI CÔNG CẢNH QUAN
                        </h2>
                      </div>
                      <p className="txt-box-service ">
                        Với đội ngũ Kỹ sư cảnh quan có chuyên môn sâu rộng, dày
                        kinh nghiệm, đam mê nghề nghiệp, L.A.D luôn đem lại cho
                        khách hàng những sản phẩm hoàn thiện đảm bảo về tiến độ,
                        kỹ thuật thi công cũng như chất lượng công trình phù hợp
                        với ngân sách.&nbsp;
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="txt-box-service">
                      <div className="title-inline">
                        <h2 className="title-inline">
                          <img
                            style={{ marginRight: "5px" }}
                            alt=""
                            src={require("../images/images/service-icon-1526573283.png")}
                          />
                          Cung cấp cây xanh công trình
                        </h2>
                      </div>
                      <p className="txt-box-service">
                        Với hơn 35 đối tác nhà vườn và đội ngũ Kỹ sư Cảnh quan
                        nhiều kinh nghiệm, L.A.D sẽ là đơn vị Cung cấp cây xanh
                        công trình uy tín với chất lượng tốt nhất, giá thành hợp
                        lý nhất.&nbsp;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 ">
                  <div className="text-center" style={{ marginTop: "15px" }}>
                    <button className="btn btn-outline-success">
                      XEM THÊM
                    </button>
                  </div>
                </div>
        
            </div>

            <div className="col-md-4">
             
                <div data-aos="fade-left"  className="box-home-about">
                  <div className="box-about">
                    <img
                      className="img-about"
                      alt=""
                      src={require("../images/images/image-1529645195.jpg")}
                    ></img>

                    <div className="txt-box-about">
                      <h2 style={{ fontSize: "23px" }}>Về chúng tôi</h2>
                      <p className="content-box-about">
                        Công ty Cổ Phần Đầu Tư L.A.D&nbsp;là đơn vị chuyên tư
                        vấn, thiết kế kiến trúc - nội thất, thiết kế - thi công
                        cảnh quan&nbsp;cho các khu vực tỉnh thành lớn như
                        Tp.HCM&nbsp;và các khu vực lân cận.
                      </p>
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

export default HomePage;
