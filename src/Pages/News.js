import React, { useEffect, useState } from "react";
import "./Style/News.css";
import { motion } from "framer-motion";
import BoxNew from "../components/BoxNews/BoxNew";
import NewsApi from "../api/NewsApi";
import { list } from "firebase/storage";
import OnTop from "../components/BacktoTop/OnTop";

function News() {
  const [listNews, setListNews] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 9,
    countRows: 1,
  });
  const [filters, setFilters] = useState({
    limit: 9,
    page: 0,
  });
  const [loading, setLoading] = useState(false);
  const totalPages = Math.ceil(pagination.countRows / pagination.limit);
  useEffect(() => {
    document.title = "TIN TỨC";
    const FetchListNews = async () => {
      try {
        setLoading(true);
        const response = await NewsApi.getAll(filters);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListNews(data.data);
          setPagination(data.pageInfo);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListNews();
  }, [filters]);
  function handlePageChange(newPage) {
    setPagination({ ...pagination, page: newPage });
    setFilters({ ...filters, page: newPage });
  }
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
          <div className="row">
            {loading ? (
              <div
                className="text-center"
                style={{
                  height: "780px",
                  width: "100%",
                  fontSize: "30px",
                  display: "flex",
                  alignItems: "center",
                  color: "#6f6f6f",
                }}
              >
                Đang tải tin tức...
              </div>
            ) : (
              <div>
                {listNews?.map((n, index) => (
                  <div
                    key={index}
                    className="col-md-4"
                    data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                    data-aos-duration="2000"
                  >
                    <BoxNew props={n} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="pagination">
          {pagination.page <= 0 ? (
            <></>
          ) : (
            <button
              style={{ marginRight: "10px" }}
              className="btn btn-outline-secondary"
              disabled={pagination.page <= 0}
              onClick={() => handlePageChange(pagination.page - 1)}
            >
              Quay lại
            </button>
          )}
          {pagination.page >= totalPages - 1 ? (
            <></>
          ) : (
            <button
              className="btn btn-outline-success"
              disabled={pagination.page >= totalPages - 1}
              onClick={() => handlePageChange(pagination.page + 1)}
            >
              Xem thêm
            </button>
          )}
        </div>
      </article>
      <OnTop />
    </div>
  );
}

export default News;
