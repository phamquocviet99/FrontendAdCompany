import { React, useEffect } from "react";

import { Carousel } from "react-bootstrap";
import "./Style/HomePage.css";
import Aos from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
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
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="col-md-8"
            >
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
                      L.A.D với đội ngũ Kiến Trúc Sư giàu kinh nghiệm và chuyên
                      viên thiết kế có chuyên môn cao, giàu ý tưởng sáng tạo sẽ
                      đem đến cho bạn một sản phẩm hoàn hảo nhất.
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
                  <button className="btn btn-outline-success">XEM THÊM</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div data-aos="fade-left" className="box-about">
                <img
                  className="img-about"
                  alt=""
                  src={require("../images/images/image-1529645195.jpg")}
                ></img>

                <div className="txt-box-about">
                  <h2 className="title-inline">Về chúng tôi</h2>
                  <p className="content-box-about">
                    Công ty Cổ Phần Đầu Tư L.A.D&nbsp;là đơn vị chuyên tư vấn,
                    thiết kế kiến trúc - nội thất, thiết kế - thi công cảnh
                    quan&nbsp;cho các khu vực tỉnh thành lớn như Tp.HCM&nbsp;và
                    các khu vực lân cận.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-news">
        <div className="container">
          <div className="home-title">
            <p className="font-title-home">tin tức & sự kiện</p>
          </div>
          <div className="row">
            <div
              className="col-md-7 col-xs-12"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="box-news">
                <div className="div-news"></div>
                <div class="ed-comments-cal">
                  <div class="ed-comment">
                    <i class="fa fa-eye icon-news-home"></i>
                    <br /> 915
                  </div>
                  <div class="ed-calendar">
                    <i class="fa fa-calendar icon-news-home"></i>
                    <br />
                    01/2021
                  </div>
                </div>
                <div className="txt-news">
                  <h2 className="title-inline">
                    YẾU TỐ CẢNH QUAN TRONG RESORT
                  </h2>
                  <div
                    style={{
                      width: "85%",
                      height: "1.5px",
                      backgroundColor: "#ab987a",
                      margin: "10px 0",
                    }}
                  ></div>
                  <p className="content-box-about" style={{ marginTop: "0px" }}>
                    Dưới góc độ nghề Quy hoạch và Kiến trúc, Resort là một trong
                    những loại hình công trình có nhiều cảm hứng sang tác nhất
                    với những ý tưởng xuất phát từ những giá trị sinh thái tự
                    nhiên và nhân văn nơi công trình tồn tại. Resort không chỉ
                    đơn gian là phòng ngủ, nơi lưu trú với dịch vụ tiện nghi m
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 col-xs-12"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="box-news-right">
                <img
                  alt=""
                  src={require("../images/images/news-1563348634.jpg")}
                  className="img-news"
                ></img>
                <h2 className="title-inline" style={{ paddingRight: "20px" }}>
                  Cách chọn mai chơi tết
                </h2>
                <div class="ed-comments-cal-right">
                  <div class="ed-comment-right">
                    <i class="fa fa-eye icon-news-home-right"></i>
                    <br /> 915
                  </div>
                  <div class="ed-calendar-right">
                    <i class="fa fa-calendar icon-news-home-right"></i>
                    <br />
                    01/2021
                  </div>
                </div>
              </div>
              <div className="box-news-right">
                <img
                  alt=""
                  src={require("../images/images/news-1563348634.jpg")}
                  className="img-news"
                ></img>
                <h2 className="title-inline" style={{ paddingRight: "20px" }}>
                  Cách chọn mai chơi tết
                </h2>
                <div class="ed-comments-cal-right">
                  <div class="ed-comment-right">
                    <i class="fa fa-eye icon-news-home-right"></i>
                    <br /> 915
                  </div>
                  <div class="ed-calendar-right">
                    <i class="fa fa-calendar icon-news-home-right"></i>
                    <br />
                    01/2021
                  </div>
                </div>
              </div>
              <div className="box-news-right">
                <img
                  alt=""
                  src={require("../images/images/news-1563348634.jpg")}
                  className="img-news"
                ></img>
                <h2 className="title-inline" style={{ paddingRight: "20px" }}>
                  Cách chọn mai chơi tết
                </h2>
                <div class="ed-comments-cal-right">
                  <div class="ed-comment-right">
                    <i class="fa fa-eye icon-news-home-right"></i>
                    <br /> 915
                  </div>
                  <div class="ed-calendar-right">
                    <i class="fa fa-calendar icon-news-home-right"></i>
                    <br />
                    01/2021
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center"
            style={{ marginTop: "20px", marginBottom: "30px" }}
          >
            <button className="btn btn-outline-success">XEM THÊM</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
