import React from "react";
import "./Style/DetailsNews.css";
import { motion } from "framer-motion";
import BoxNewsRight from "../components/BoxNewsRight/BoxNewsRight";
import { Button, Form, FormControl } from "react-bootstrap";

function DetailsNews() {
  return (
    <div>
      <div className="banner-recruit-page">
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
              tin tức
            </motion.h2>
          </div>
        </div>
      </div>
      <article>
        <div className="container">
          <div className="title-news-details">
            <h2> CÁCH CHỌN MAI CHƠI TẾT</h2>
            <h5>L.A.D - 28/09/2020</h5>
            <h6></h6>
          </div>
          <div className="row">
            <div className="col-md-8">
              <img
                className="img-new-details-thumb"
                alt=""
                src={require("../images/images/news-1563348634.jpg")}
              ></img>
            </div>
            <div className="col-md-4">
              <BoxNewsRight />
              <BoxNewsRight />
              <BoxNewsRight />
              <BoxNewsRight />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <p>asd</p>
              <p>
                <em>
                  Để biết thêm thông tin và được tư vấn, xin vui lòng liên hệ:
                </em>
                <br />
                <span style={{ color: "#669900" }}>
                  <strong>Công Ty Cổ Phần Đầu Tư L.A.D</strong>
                  <br />
                  Địa chỉ: D20 KDC Phước Nguyên Hưng, Nguyễn Hữu Thọ, Ấp 5, Xã
                  Phước Kiển, H. Nhà Bè, Tp. Hồ Chí Minh
                  <br />
                  Hotline: 0903.699.664
                  <br />
                  Email: lad.jsc168@gmail.com
                </span>
              </p>
            </div>
            <div className="col-md-4">
              <div className="title-right-news-dt">
                <h2> Đăng ký nhận tin</h2>
                <h5>Góc chia sẻ, hướng dẫn thi công</h5>
                <Form style={{ margin: "20px 0" }} className="d-flex">
                  <FormControl
                    type="email"
                    placeholder="Email"
                    className="input-search"
                    aria-label="Email"
                  />
                  <Button variant=" btn-search">
                    <i
                      style={{ fontSize: "20px" }}
                      className="fa fa-arrow-right"
                    ></i>
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default DetailsNews;
