import { React, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Style/About.css";

function About() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])
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
            <div className="col-md-4">
              <div className="box-news-full">
                <img alt="" src={require("../images/images/12.jpg")} />
                <div className="row infor-news-full">
                  <div className="col-xs-12 title-post ed-food-title">
                    <h2>cải tạo văn phòng novaland</h2>
                    <div className="txt-news-full limit-text-about">
                      <p>
                        Chủ đầu tư:&nbsp;Anh Hiệp Địa điểm:&nbsp;Vĩnh Long Diện
                        tích:&nbsp;120 m² Dịch vụ:&nbsp;Thiết kế kiến trúc - nội
                        thất Thiết kế nội thất theo phong cách hiện đại luôn
                        được đông đảo người yêu thích và lựa chọn. Bởi chúng đem
                        lại sự tích cực, tiện nghi và sang trọng cho không gian
                        sống. Thiết kế sử dụng gam màu trắng&nbsp;làm nền chủ
                        đạo đã&nbsp;nổi bật toàn bộ&nbsp;nội thất với các gam
                        màu tối trong căn nhà. Thêm vào đó ánh sáng đèn phối hợp
                        với ánh sáng thiên nhiên&nbsp;được bố trí hài hòa tạo
                        cảm giác không gian rộng rãi và rất thoáng đãng.
                      </p>
                    </div>
                    <div className="see-more">
                      <a href="/">
                        <i class="fa fa-arrow-right"></i>
                        Xem thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-news-full">
                <img alt="" src={require("../images/images/12.jpg")} />
                <div className="row infor-news-full">
                  <div className="col-xs-12 title-post ed-food-title">
                    <h2>cải tạo văn phòng novaland</h2>
                    <div className="txt-news-full limit-text-about">
                      <p>
                        Chủ đầu tư:&nbsp;Anh Hiệp Địa điểm:&nbsp;Vĩnh Long Diện
                        tích:&nbsp;120 m² Dịch vụ:&nbsp;Thiết kế kiến trúc - nội
                        thất Thiết kế nội thất theo phong cách hiện đại luôn
                        được đông đảo người yêu thích và lựa chọn. Bởi chúng đem
                        lại sự tích cực, tiện nghi và sang trọng cho không gian
                        sống. Thiết kế sử dụng gam màu trắng&nbsp;làm nền chủ
                        đạo đã&nbsp;nổi bật toàn bộ&nbsp;nội thất với các gam
                        màu tối trong căn nhà. Thêm vào đó ánh sáng đèn phối hợp
                        với ánh sáng thiên nhiên&nbsp;được bố trí hài hòa tạo
                        cảm giác không gian rộng rãi và rất thoáng đãng.
                      </p>
                    </div>
                    <div className="see-more">
                      <a href="/">
                        <i class="fa fa-arrow-right"></i>
                        Xem thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-news-full">
                <img alt="" src={require("../images/images/12.jpg")} />
                <div className="row infor-news-full">
                  <div className="col-xs-12 title-post ed-food-title">
                    <h2>cải tạo văn phòng novaland</h2>
                    <div className="txt-news-full limit-text-about">
                      <p>
                        Chủ đầu tư:&nbsp;Anh Hiệp Địa điểm:&nbsp;Vĩnh Long Diện
                        tích:&nbsp;120 m² Dịch vụ:&nbsp;Thiết kế kiến trúc - nội
                        thất Thiết kế nội thất theo phong cách hiện đại luôn
                        được đông đảo người yêu thích và lựa chọn. Bởi chúng đem
                        lại sự tích cực, tiện nghi và sang trọng cho không gian
                        sống. Thiết kế sử dụng gam màu trắng&nbsp;làm nền chủ
                        đạo đã&nbsp;nổi bật toàn bộ&nbsp;nội thất với các gam
                        màu tối trong căn nhà. Thêm vào đó ánh sáng đèn phối hợp
                        với ánh sáng thiên nhiên&nbsp;được bố trí hài hòa tạo
                        cảm giác không gian rộng rãi và rất thoáng đãng.
                      </p>
                    </div>
                    <div className="see-more">
                      <a href="/">
                        <i class="fa fa-arrow-right"></i>
                        Xem thêm
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <motion.div className="  item-img-partner">
                <img
                  alt=""
                  src={require("../images/images/image-1529645195.jpg")}
                ></img>
              </motion.div>
              <motion.div className="  item-img-partner">
                <img
                  alt=""
                  src={require("../images/images/image-1529645195.jpg")}
                ></img>
              </motion.div>
              <motion.div className="  item-img-partner">
                <img
                  alt=""
                  src={require("../images/images/image-1529645195.jpg")}
                ></img>
              </motion.div>
              <motion.div className=" item-img-partner">
                <img
                  alt=""
                  src={require("../images/images/image-1529645195.jpg")}
                ></img>
              </motion.div>
              <motion.div className="  item-img-partner">
                <img
                  alt=""
                  src={require("../images/images/image-1529645195.jpg")}
                ></img>
              </motion.div>
              <motion.div className="  item-img-partner">
                <img
                  alt=""
                  src={require("../images/images/image-1529645195.jpg")}
                ></img>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}

export default About;
