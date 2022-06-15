import React from "react";
import "./Style/Product.css";
import "./Style/ProductDetails.css";
import { motion } from "framer-motion";
import { Form, FormControl, Button } from "react-bootstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ProductDetails() {
  const listProjectCategory = [
    { id: 1, name: "Tất cả" },
    { id: 2, name: "Thiết kế Cảnh quan" },
    { id: 3, name: "Thiết kế Kiến trúc - Nội thất" },
    { id: 4, name: "Thi công Cảnh quan" },
    { id: 5, name: "Chăm sóc - bảo dưỡng cây cảnh" },
  ];
  return (
    <div>
      <div className="banner-product-page">
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
              sản phẩm
            </motion.h2>
          </div>
        </div>
      </div>
      <article>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="home-title">
                <p style={{ fontSize: "20px" }} className="font-title-home">
                  danh mục sản phẩm
                </p>
              </div>
              <Form style={{ margin: "20px 0" }} className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="input-search"
                  aria-label="Search"
                />
                <Button variant=" btn-search">
                  <i style={{ fontSize: "20px" }} className="fa fa-search"></i>
                </Button>
              </Form>
              <div className="list-item panel">
                {listProjectCategory.map((item) => (
                  <a
                    href="/"
                    className="item-cate-project "
                    key={item.id}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>{item.name}</p>
                    <i
                      style={{ margin: "7px 0" }}
                      className="fa fa-arrow-down"
                    ></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="col-md-9 ed-title-thumb-detail">
              <div className="col-md-9 col-xs-12">
                <Carousel autoPlay interval="2000" transitionTime="1000">
                  <div>
                    <img alt="" src="https://picsum.photos/700/400?img=1" />
                    <p className="legend">My Classic Still 1</p>
                  </div>
                  <div>
                    <img alt="" src="https://picsum.photos/700/400?img=2" />
                    <p className="legend">My Classic Still 2</p>
                  </div>
                  <div>
                    <img alt="" src="https://picsum.photos/700/400?img=3" />
                    <p className="legend">My Classic Still 3</p>
                  </div>
                </Carousel>
              </div>
              <div className="col-md-3 col-xs-12">
                <h1 className="product-title">Cây Ngọc Bích</h1>
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "black",
                  }}
                />
                <div>
                  <span className="price text-center">Giá : 200.000</span>
                </div>
                <span>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>
                    <strong>Tên thường gọi:</strong> <em>Cây Ngọc bích</em>
                    <br />
                    <strong>Tên gọi khác:</strong>{" "}
                    <em>
                      cây thạch bích&nbsp;, cây phỉ thúy, cây tình bạn, cây may
                      mắn
                    </em>
                    <br />
                    <strong>Tên khoa học:</strong>
                    <em> Crassula Ovata</em>
                    <br />
                    <strong>Họ:</strong> <em>Crassulaceae</em>
                    <br />
                    <strong>Chiều cao:</strong> 20-25cm
                    <br />
                    <strong>Công dụng:</strong> Với hình dạng cây xinh xắn bắt
                    mắt cây thường được trồng trong chậu nhỏ để trên bàn làm
                    việc, hoặc làm quà tặng. Cây còn mang nhiều ý nghĩa tốt đẹp.
                  </p>
                </span>
                <a href="/" className="fb-share">
                  <i className="fa fa-facebook"></i>
                  {"   "}Chia sẻ
                </a>
              </div>
              <div className="col-lg-12" style={{clear:"both"}}>
                <div className="info-dt-gd">
                    <h3>Mô tả sản phẩm</h3>
                    <hr></hr>

                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProductDetails;
