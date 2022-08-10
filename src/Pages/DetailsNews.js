import { React, useState, useEffect } from "react";
import "./Style/DetailsNews.css";
import { motion } from "framer-motion";

import { Button, Form, FormControl } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NewsApi from "../api/NewsApi";
import OnTop from "../components/BacktoTop/OnTop";
import BoxNewsRight from "../components/BoxNewsRight/BoxNewsRight";
import InformationApi from "../api/InformationApi";

function DetailsNews() {
  const { id } = useParams();
  const [news, setNews] = useState({});
  const [listNews, setListNews] = useState([]);
  const [information, setInformation] = useState({});
  useEffect(() => {
    const fetchInfor = async () => {
      try {
        const response = await InformationApi.getById(
          "62b0756892dfc7d99e74b340"
        );
        const data = JSON.parse(JSON.stringify(response));
        // setInformation(data);
        if (!data.error) {
          setInformation(data.inforCompany);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchInfor();
  }, []);
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
        const response = await NewsApi.getAll({ page: 0, limit: 7 });
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          var listData = [];
          for (const neww of data.data) {
            if (neww._id !== id) {
              listData.push(neww);
            }
          }
          setListNews(listData);
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
            <h5>L.A.D - {news?.createdAt?.slice(0,10)}</h5>
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
              {listNews?.map((n, index) =>
                n._id !== id ? <BoxNewsRight key={index} news={n} /> : <></>
              )}
            </div>
          </div>
          <div className="row">
            <div style={{height:"20px"}}/>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="col-md-8"
            >
              <p>
                {" "}
                <div dangerouslySetInnerHTML={{ __html: news?.content }} />
              </p>
              <p>
                <div style={{ height: "30px" }} />
                <em>
                  Để biết thêm thông tin và được tư vấn, xin vui lòng liên hệ:
                </em>
                <br />
                <span style={{ color: "#669900" }}>
                  <strong>{information?.name}</strong>
                  <br />
                  Địa chỉ: {information?.address}
                  <br />
                  Hotline: {information?.phone}
                  <br />
                  Email: {information?.email}
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
      <OnTop />
    </div>
  );
}

export default DetailsNews;
