import { React, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Style/About.css";
import PartnerApi from "../api/PartnerApi";
import ProjectApi from "../api/ProjectApi";

function About() {
  const [width, setWidth] = useState(0);
  const [listPartner, setListPartner] = useState([]);
  const [listProject, setListProject] = useState([]);
  const carousel = useRef();
  useEffect(() => {
    const FetchFullPartner = async () => {
      document.title="GIỚI THIỆU"
      try {
        const response = await PartnerApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListPartner(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchFullPartner();
  }, []);
  useEffect(() => {
    const FetchListProject = async () => {
      try {
        const response = await ProjectApi.getAll({ page: 0, limit: 3 });
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
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="content-about-page">
      <div className="banner-about-page">
        <div className="container">
          <div className="title-about">
            <motion.h2
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              GIỚI THIỆU
            </motion.h2>
          </div>
        </div>
      </div>
      <article className="about-page-1">
        <div className="container">
          <div className="row">
            <div
              className="col-md-7"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              <div className="txt-about">
                <p>
                  Công ty Cổ Phần Đầu Tư L.A.D là đơn vị chuyên tư vấn, thiết kế
                  kiến trúc - nội thất, thiết kế - thi công cảnh quan cho các
                  khu vực tỉnh thành lớn như Tp.HCM và các khu vực lân cận. Là
                  một đơn vị chuyên nghiệp, năng động, đầy nhiệt huyết. L.A.D
                  trung thành với phương châm hoạt động “Sáng tạo – Tiên phong -
                  Chất lượng vàng”.
                  <br></br>
                  <br></br>
                  L.A.D cùng với đội ngũ Kiến trúc sư, chuyên viên tư vấn, thiết
                  kế và thi công cảnh quan chuyên nghiệp sẽ giúp bạn có được một
                  không gian cây xanh xinh đẹp hơn cả sự mong đợi. Với hệ thống
                  trang thiết bị thi công hiện đại, nguồn vườn ươm rộng khắp
                  cùng với đội ngũ Kiến trúc sư, Kỹ sư cảnh quan có nhiều kinh
                  nghiệm.
                  <br></br>
                  Chúng tôi luôn đảm bảo một dịch vụ thiết kế và thi công cảnh
                  quan chất lượng và tiết kiệm cho khách hàng bằng các quy trình
                  thực hiện chuyên nghiệp.
                </p>
              </div>
            </div>
            <div
              className="col-md-5"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              <div className="bocviengoai">
                <div className="ed-border-picabout"></div>
                <div className="ed-picabout">
                  <img
                    src={require("../images/images/image-1529645195.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row ed-pic-about-page">
            <div className="col-md-3 col-sm-6">
              <img
                className="pic-about-page"
                alt=""
                src={require("../images/images/news-1.jpg")}
              ></img>
            </div>
            <div className="col-md-3 col-sm-6">
              <img
                className="pic-about-page"
                alt=""
                src={require("../images/images/news-1.jpg")}
              ></img>
            </div>
            <div className="col-md-3 col-sm-6">
              <img
                className="pic-about-page"
                alt=""
                src={require("../images/images/news-1.jpg")}
              ></img>
            </div>
            <div className="col-md-3 col-sm-6">
              <img
                className="pic-about-page"
                alt=""
                src={require("../images/images/news-1.jpg")}
              ></img>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="txt-about">
                <p>
                  Với vai trò cải thiện khí hậu - lá phổi của trái đất, cải
                  thiện sức khỏe con người, cây xanh đóng vai trò ngày càng quan
                  trọng. Để đạt được hiệu quả tối ưu, cũng như đạt được tính
                  thẩm mỹ cao giữa kiến trúc và cây cối, L.A.D sẽ là một lựa
                  chọn tin cậy để đáp ứng nhu cầu của bạn. Công ty cổ phần đầu
                  tư L.A.D cam kết sẽ mang đến cho khách hàng tất cả các dịch vụ
                  một cách trọn vẹn nhất.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="experience-page-1">
        <div className="container">
          <div className="home-title">
            <p className="font-title-home">Dự án</p>
          </div>
          <div className="row">
            {listProject?.map((p, index) => (
              <div className="col-md-4">
                <div className="box-news-full">
                  <img alt="" src={p?.image[0]?.url} />
                  <div className="row infor-news-full">
                    <div className="col-xs-12 title-post ed-food-title">
                      <h2>{p?.name}</h2>
                      <div className="txt-news-full limit-text-about">
                        <p>
                         <p>Chủ đầu tư : <span>{p?.investor}</span></p>
                         <p>Dịch vụ : <span>{p?.nameCategory}</span></p>
                         <p>Địa điểm : <span>{p?.location}</span></p>
                        </p>
                      </div>
                      <div className="see-more">
                        <a href={`/du-an/chi-tiet/${p?._id}`}>
                          <i class="fa fa-arrow-right"></i>
                          Xem thêm
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-12 ">
              <div className="text-center" style={{ marginTop: "15px" }}>
                <button className="btn btn-outline-success">XEM THÊM</button>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="about-doitac">
        <div className="container">
          <div className="home-title">
            <p className="font-title-home">đối tác chiến lược</p>
          </div>
          <motion.div ref={carousel} className="carousel-partner">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-carousel-partner"
            >
              {listPartner?.map((p, index) => (
                <motion.div key={index} className="  item-img-partner">
                  <img alt={p.nameImage} src={p?.urlImage}></img>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}

export default About;
