import React, { useEffect, useState } from "react";
import "./Style/Product.css";
import "./Style/ProductDetails.css";
import { motion } from "framer-motion";
import { Form, FormControl, Button } from "react-bootstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProductApi from "../api/ProductApi";
import CategoryProductApi from "../api/CategoryProductApi";
import { useNavigate, useParams } from "react-router-dom";
import { async } from "@firebase/util";
import Product from "./Product";
import BoxProduct from "../components/BoxProduct/BoxProduct";

function ProductDetails() {
  useEffect(() => {
    document.title = "SẢN PHẨM";
  }, []);
  const navigator = useNavigate();
  const [listCategory, setListCategory] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function FetchProduct() {
      try {
        const response = await ProductApi.getById(id);
        const data = JSON.parse(JSON.stringify(response));

        if (!data.error) {
          setProduct(data.data);
          FetchListProductByIDCate(data.data.idCategory);
        }
      } catch (error) {
        console.log(error);
      }
    }
    const FetchListProductByIDCate = async (idCate) => {
      try {
        const response = await ProductApi.getByIdCate(idCate, {
          limit: 4,
          page: 0,
        });
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListProduct(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchProduct();
  }, [id]);
  useEffect(() => {
    document.title = "SẢN PHẨM";
    function FindItem(data) {
      var r = [],
        o = {};
      data.forEach(function (a) {
        if (o[a._id] && o[a._id].children) {
          a.children = o[a._id] && o[a._id].children;
        }
        o[a._id] = a;
        if (a.idParent === "none") {
          r.push(a);
        } else {
          o[a.idParent] = o[a.idParent] || {};
          o[a.idParent].children = o[a.idParent].children || [];
          o[a.idParent].children.push(a);
        }
      });
      return r;
    }

    const FetchListCategory = async () => {
      try {
        const response = await CategoryProductApi.getAll();
        const data = JSON.parse(JSON.stringify(response));

        if (!data.error) {
          setListCategory(FindItem(data.data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    FetchListCategory();
  }, []);

  function getListProjectByIdCategory(id) {
    navigator(`/san-pham/${id}`);
  }

  const FetchListProduct = async () => {
    navigator(`/san-pham/`);
  };
  function BarCategory({ current }) {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
      if (!current.children) {
        getListProjectByIdCategory(current._id);
      }

      setShow((prevState) => !prevState);
    };
    return (
      <div>
        <div
          onClick={toggleShow}
          className="item-cate-project"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>{current.name}</p>
          <i
            style={current.children ? { margin: "7px 0" } : { display: "none" }}
            className="fa fa-arrow-down"
          ></i>
        </div>
        {current.children ? (
          <div style={show ? { display: "" } : { display: "none" }}>
            {current.children.map((item, index) => (
              <BarCategory key={index} current={item} />
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }

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

              <div className="list-item panel">
                <div
                  onClick={FetchListProduct}
                  className="item-cate-project"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Tất cả</p>
                </div>
                {listCategory.map((item, index) => (
                  <BarCategory key={index} current={item} />
                ))}
              </div>
            </div>
            <div className="col-md-9 ed-title-thumb-detail">
              <div className="col-md-9 col-xs-12">
                <Carousel autoPlay interval="2000" transitionTime="1000">
                  {product?.image?.map((i, index) => (
                    <div key={index}>
                      <img alt="" src={i?.url} />
                    </div>
                  ))}
                  
                </Carousel>
              </div>
              <div className="col-md-3 col-xs-12">
                <h1 className="product-title">{product?.commonName}</h1>
                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    backgroundColor: "black",
                  }}
                />
                <div>
                  <span className="price text-center">
                    Giá : {product?.price}
                  </span>
                </div>
                <span>
                  <p style={{ marginLeft: "0in", marginRight: "0in" }}>
                    <strong>Tên thường gọi:</strong>{" "}
                    <em>{product?.commonName}</em>
                    <br />
                    <strong>Tên gọi khác:</strong> <em>{product?.orderName}</em>
                    <br />
                    <strong>Tên khoa học:</strong>
                    <em>{product?.scienceName}</em>
                    <br />
                    <strong>Tên tiếng anh:</strong>
                    <em>{product?.englishName}</em>
                    <br />
                    <strong>Họ:</strong> <em>{product?.surname}</em>
                    <br />
                    <strong>Kích thước:</strong> {product?.size}
                    <br />
                    <strong>Công dụng:</strong> {product?.uses}
                  </p>
                </span>
                <a href="/" className="fb-share">
                  <i className="fa fa-facebook"></i>
                  {"   "}Chia sẻ
                </a>
              </div>
              <div className="col-lg-12" style={{ clear: "both" }}>
                <div className="info-dt-gd">
                  <h3>Mô tả sản phẩm</h3>
                  <hr></hr>
                  <div
                    dangerouslySetInnerHTML={{ __html: product?.description }}
                  />
                  <p>
                    <em>
                      Để biết thêm thông tin và được tư vấn, xin vui lòng liên
                      hệ:
                    </em>
                    <br />
                    <span style={{ color: "#669900" }}>
                      <strong>Công Ty Cổ Phần Đầu Tư L.A.D</strong>
                      <br />
                      Địa chỉ: D20 KDC Phước Nguyên Hưng, Nguyễn Hữu Thọ, Ấp 5,
                      Xã Phước Kiển, H. Nhà Bè, Tp. Hồ Chí Minh
                      <br />
                      Hotline: 0903.699.664
                      <br />
                      Email: lad.jsc168@gmail.com
                    </span>
                  </p>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="home-title">
            <p className="font-title-home">Sản phẩm cùng danh mục</p>
          </div>
          <div className="row mt-5">
            {listProduct?.map((p, index) => (
              <div className="col-sm-3">
                <BoxProduct product={p} />
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProductDetails;
