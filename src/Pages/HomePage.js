import { React, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Carousel, Form, Button } from "react-bootstrap";
import DivDesign1 from "../components/DivDesign1/DivDesign1";
import DivDesign2 from "../components/DivDesign2/DivDesign2";
import Iframe from "../components/Iframe/Iframe";
import BoxNewsRight from "../components/BoxNewsRight/BoxNewsRight";
import "./Style/HomePage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import NewsApi from "../api/NewsApi";
import ProjectApi from "../api/ProjectApi";

function ChangeDate(text) {
  if (!text) return;
  return text.substring(8, 10) + "/" + text.substring(5, 7);
}
function HomePage() {
  const params = useParams();
  const contact = useRef(null);
  const [listNews, setListNews] = useState([]);
  const [listProject, setListProject] = useState([]);

  useEffect(() => {
    document.title ="TRANG CHỦ"
    const executeScroll = () => contact.current.scrollIntoView();
    if (params.params !== undefined) {
      executeScroll();
    }
  }, []);
  useEffect(() => {
    const FetchListNews = async () => {
      try {
        const response = await NewsApi.getAll({ page: 0, limit: 4 });
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListNews(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListNews();
  }, []);
  useEffect(() => {
    const FetchListProject = async () => {
      try {
        const response = await ProjectApi.getAll({ page: 0, limit: 6 });
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListProject(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListProject();
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [params]);
  const iframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7840.48626187924!2d106.69834301505135!3d10.715721187147192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zRDIwLCBLREMgUGjGsOG7m2MgTmd1eeG7hW4gSMawbmcsIE5ndXnhu4VuIEjhu691IFRo4buNLCDhuqRwIDUsIFjDoyBQaMaw4bubYyBLaeG7g24sIEh1eeG7h24gTmjDoCBCw6gsIFRwLkjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1654932574737!5m2!1svi!2s" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  // const executeScroll = () => contact.current.scrollIntoView();
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
                  <a href="/dich-vu" className="btn btn-outline-success">XEM THÊM</a>
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
              style={{ marginBottom: "20px" }}
            >
              <div className="box-news">
                <div
                  style={{
                    backgroundImage: `url(${listNews[0]?.urlImage})`,
                    backgroundSize: "cover",
                    height: "200px",
                    width: "100%",
                  }}
                  
                ></div>
                <div className="ed-comments-cal">
                  <div className="ed-comment">
                    <i className="fa fa-eye icon-news-home"></i>
                    <br /> {listNews[0]?.view}
                  </div>
                  <div className="ed-calendar">
                    <i className="fa fa-calendar icon-news-home"></i>
                    <br />
                    {ChangeDate(listNews[0]?.createdAt)}
                  </div>
                </div>
                <div className="txt-news">
                  <h2 className="title-inline">{listNews[0]?.name}</h2>
                  <div
                    style={{
                      width: "85%",
                      height: "1.5px",
                      backgroundColor: "#ab987a",
                      margin: "10px 0",
                    }}
                  ></div>
                  <p className="content-box-about" style={{ marginTop: "0px" }}>
                   <a className="txt-news-hom" href={`/tin-tuc/chi-tiet/${listNews[0]?._id}`}>{listNews[0]?.summary}</a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 col-xs-12"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              {listNews?.map((n, index) =>
                index !== 0 ? <BoxNewsRight news={n} /> : <></>
              )}
            </div>
          </div>
          <div
            className="text-center"
            style={{ marginTop: "20px", marginBottom: "30px" }}
          >
            <a href="/tin-tuc"  className="btn btn-outline-success">
              XEM THÊM
            </a>
          </div>
        </div>
      </div>
      <article
        className="home-capacity"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="row" style={{ margin: "0" }}>
          <div className="col-md-6 ed-capacity">
            <div className="info-capacity">
              <h2 className="title-capacity">năng lực của chúng tôi</h2>
              <div className="txt-capacity">
                <img alt="" src={require("../images/images/1.png")} />
                <p className="font-txt-capacity">3 Năm kinh nghiệm</p>
              </div>
              <div className="txt-capacity">
                <img alt="" src={require("../images/images/2.png")} />
                <p className="font-txt-capacity">15 Chuyên gia kỹ thuật</p>
              </div>
              <div className="txt-capacity">
                <img alt="" src={require("../images/images/3.png")} />
                <p className="font-txt-capacity">15 Kỹ sư thiết kế</p>
              </div>
              <div className="txt-capacity">
                <img alt="" src={require("../images/images/4.png")} />
                <p className="font-txt-capacity">35 Nhà vườn đối tác</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article
        className="customer-review"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="container">
          <div className="home-title">
            <p className="font-title-home">ý kiến khách hàng</p>
          </div>
          <Carousel>
            <Carousel.Item interval={3000}>
              <div className="row">
                <div className="col-md-3">
                  <img
                    alt=""
                    src={require("../images/images/customer.jpg")}
                    className="img-customer"
                  ></img>
                </div>
                <div className="col-md-9">
                  <div className="info-customer">
                    <p>
                      <i class="fa fa-quote-left icon-customer"></i>{" "}
                    </p>
                    <p className="content-review">
                      L.A.D là một công ty cảnh quan rất tốt. Họ có nhiều dịch
                      vụ tốt. Chúng tôi yêu họ bởi vì tất cả các nhân viên đang
                      làm việc chăm chỉ, trung thực và đáng tin cậy. Họ luôn
                      luôn đến đúng giờ, và giá thì...tốt quá!
                    </p>
                    <h3 className="name-customer">Mai harimu</h3>
                    <p className="job-customer"> Thiết kế thời trang</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <div className="row">
                <div className="col-md-3">
                  <img
                    alt=""
                    src={require("../images/images/customer.jpg")}
                    className="img-customer"
                  ></img>
                </div>
                <div className="col-md-9">
                  <div className="info-customer">
                    <p>
                      <i class="fa fa-quote-left icon-customer"></i>{" "}
                    </p>
                    <p className="content-review">
                      L.A.D là một công ty cảnh quan rất tốt. Họ có nhiều dịch
                      vụ tốt. Chúng tôi yêu họ bởi vì tất cả các nhân viên đang
                      làm việc chăm chỉ, trung thực và đáng tin cậy. Họ luôn
                      luôn đến đúng giờ, và giá thì...tốt quá!
                    </p>
                    <h3 className="name-customer">Mai harimu</h3>
                    <p className="job-customer"> Thiết kế thời trang</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <div className="row">
                <div className="col-md-3">
                  <img
                    alt=""
                    src={require("../images/images/customer.jpg")}
                    className="img-customer"
                  ></img>
                </div>
                <div className="col-md-9">
                  <div className="info-customer">
                    <p>
                      <i class="fa fa-quote-left icon-customer"></i>{" "}
                    </p>
                    <p className="content-review">
                      L.A.D là một công ty cảnh quan rất tốt. Họ có nhiều dịch
                      vụ tốt. Chúng tôi yêu họ bởi vì tất cả các nhân viên đang
                      làm việc chăm chỉ, trung thực và đáng tin cậy. Họ luôn
                      luôn đến đúng giờ, và giá thì...tốt quá!
                    </p>
                    <h3 className="name-customer">Mai harimu</h3>
                    <p className="job-customer"> Thiết kế thời trang</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </article>
      <article className="home-share">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="txt-share">
                <h2 className="font-title-share">
                  GÓC CHIA SẺ, HƯỚNG DẪN THI CÔNG
                </h2>
                <h4 className="font-content-share">
                  “ Sáng tạo - Tiên phong - Chất lượng vàng”.
                </h4>
                <div className="register">
                  <Form.Group className="mb-3">
                    <Form.Label
                      style={{
                        fontSize: "16px",
                        fontWeight: "normal",
                        marginBottom: "10px",
                      }}
                    >
                      Đăng ký nhận tin
                    </Form.Label>
                    <Form.Control
                      className="txt-email-customer"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <Button
                      className="btn-address-customer"
                      variant="primary"
                      type="submit"
                    >
                      Đăng ký
                    </Button>
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article
        className="home-project "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="container">
          <div className="home-title">
            <p className="font-title-home">dự án</p>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="ed-product">
              <DivDesign1
              project={listProject[0]}
               
              />
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="ed-product">
              <DivDesign2
              
              project={listProject[1]}
              />
            </div>
            <div class="ed-product">
              <DivDesign2
               project={listProject[2]}
              />
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="ed-product">
              <DivDesign1
                project={listProject[3]}
              />
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="ed-product">
              <DivDesign2
              project={listProject[4]}
              />
            </div>
            <div class="ed-product">
              <DivDesign2
             project={listProject[5]}
              />
            </div>
          </div>
        </div>
        <div
          className="text-center"
          style={{
            marginTop: "15px",
          }}
        >
          <a href="/du-an" ref={contact} className="btn btn-outline-success">
            XEM THÊM
          </a>
        </div>
      </article>
      <article className="home-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6 setting-contact">
              <div class="col-sm-6">
                <Form.Control
                  className="txt-input-contact"
                  type="name"
                  placeholder="Tên"
                />
                <Form.Control
                  className="txt-input-contact"
                  type="phone"
                  placeholder="Số điện thoại"
                />
                <Form.Control
                  className="txt-input-contact"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div class="col-sm-6">
                <Form.Control
                  className="aera-txt-home"
                  style={{ height: "160px" }}
                  as="textarea"
                  placeholder="Tin nhắn"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "30px",
                  }}
                >
                  <Button
                    className="btn-address-customer"
                    variant="primary"
                    type="submit"
                  >
                    Gửi
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ padding: "0" }}>
              <Iframe iframe={iframe}></Iframe>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default HomePage;
