import React, { useEffect, useState } from "react";
import "./Style/News.css";
import { motion } from "framer-motion";
import BoxNew from "../components/BoxNews/BoxNew";
import NewsApi from "../api/NewsApi";
import { list } from "firebase/storage";

function News() {
  const [listNews, setListNews] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 18,
    countRows: 1,
  });
  const [filters, setFilters] = useState({
    limit: 18,
    page: 0,
  });
  const totalPages = Math.ceil(pagination.countRows / pagination.limit);
  useEffect(() => {
    document.title="TIN TỨC"
    const FetchListNews = async () => {
      try {
        const response = await NewsApi.getAll(filters);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListNews(data.data);
          setPagination(data.pageInfo);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListNews();
  }, []);
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
            {listNews?.map((n, index) => (
              <div key={index} className="col-md-4">
                <BoxNew props={n} />
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <button
            disabled={pagination.page <= 0}
            onClick={() => handlePageChange(pagination.page - 1)}
            style={{ marginRight: "10px" }}
            className="btn btn-outline-success"
          >
            Quay lại
          </button>
          <button
            disabled={pagination.page >= totalPages - 1}
            onClick={() => handlePageChange(pagination.page + 1)}
            className="btn btn-outline-success"
          >
            Xem thêm
          </button>
        </div>
      </article>
    </div>
  );
}

export default News;
