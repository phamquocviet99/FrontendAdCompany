import React from "react";
import "./Style/Product.css";
import { motion } from "framer-motion";
import { Form, FormControl, Button } from "react-bootstrap";
import BoxProduct from "../components/BoxProduct/BoxProduct";

function Product() {
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
            <div className="col-md-9 ed-title-thumb">
              <div className="row">
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>{" "}
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
                <div className="col-sm-4">
                  <BoxProduct />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
            <button style={{marginRight :"10px"}} className="btn btn-outline-success">Quay lại</button>
            <button className="btn btn-outline-success">Xem thêm</button>
          </div>
      </article>
    </div>
  );
}

export default Product;
