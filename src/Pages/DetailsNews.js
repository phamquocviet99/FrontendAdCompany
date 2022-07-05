import { React, useState, useEffect } from "react";
import "./Style/DetailsNews.css";
import { motion } from "framer-motion";
import BoxNewsRight from "../components/BoxNewsRight/BoxNewsRight";
import { Button, Form, FormControl } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NewsApi from "../api/NewsApi";

function DetailsNews() {
  const { id } = useParams();
  const [news, setNews] = useState({});
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    document.title = "TIN TỨC";
    async function FetchNews() {
      try {
        const response = await NewsApi.getById(id);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setNews(data.data);
        }
      } catch (error) {
        alert("Tải tin tức thất bại");
        console.log(error);
      }
    }
    FetchNews();
  }, [id]);
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
            <h2> {news.name}</h2>
            <h5>L.A.D - {news?.createdAt}</h5>
            <h6></h6>
          </div>
          <div className="row">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="col-md-8"
            >
              <img
                className="img-new-details-thumb"
                alt=""
                src={news?.urlImage}
              ></img>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="col-md-4"
            >
              {listNews?.map((n, index) => (
                <BoxNewsRight key={index} news={n} />
              ))}
            </div>
          </div>
          <div className="row">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="col-md-8"
            >
              <div
                style={{
                  margin: "10px 0",
                  height: "1.5px",
                  width: "100%",
                  backgroundColor: "#67676767",
                }}
              ></div>
              <p>{news?.summary}</p>
              <div
                style={{
                  margin: "10px 0",
                  height: "1.5px",
                  width: "100%",
                  backgroundColor: "#67676767",
                }}
              ></div>
              <p>
                {" "}
                <div dangerouslySetInnerHTML={{ __html: news?.content }} />
              </p>
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
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="col-md-4"
            >
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
