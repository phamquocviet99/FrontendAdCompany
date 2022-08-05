import React, { useEffect, useState } from "react";
import "./Style/Project.css";
import { motion } from "framer-motion";
import BoxNewsFull from "../components/BoxNewsFull/BoxNewsFull";
import CategoryProjectApi from "../api/CategoryProjectApi";
import ProjectApi from "../api/ProjectApi";
import { useParams } from "react-router-dom";
import OnTop from "../components/BacktoTop/OnTop";
function Project() {
  const { id } = useParams();
  const [listCategory, setListCategory] = useState([]);
  const [listProject, setListProject] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 6,
    countRows: 1,
  });
  const [filters, setFilters] = useState({
    limit: 6,
    page: 0,
  });
  const [loading, setLoading] = useState(false);
  const totalPages = Math.ceil(pagination.countRows / pagination.limit);
  useEffect(() => {
    document.title = "DỰ ÁN";
    const FetchListCategory = async () => {
      try {
        const response = await CategoryProjectApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListCategory(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListCategory();
  }, []);
  useEffect(() => {
    const FetchListProject = async () => {
      try {
        setLoading(true);
        const response = await ProjectApi.getAll(filters);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListProject(data.data);
          setPagination(data.pageInfo);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const FetchListProjectByIDCate = async () => {
      try {
        const response = await ProjectApi.getByIdCate(id, filters);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListProject(data.data);
          setPagination(data.pageInfo);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (id === undefined) {
      FetchListProject();
    } else {
      FetchListProjectByIDCate();
    }
  }, [id, filters]);
  function handlePageChange(newPage) {
    setPagination({ ...pagination, page: newPage });
    setFilters({ ...filters, page: newPage });
  }
  return (
    <div>
      <div className="banner-project-page">
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
              dự án
            </motion.h2>
          </div>
        </div>
      </div>
      <article className="project-page">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div>
                <div className="home-title">
                  <p style={{ fontSize: "20px" }} className="font-title-home">
                    danh mục dự án
                  </p>
                </div>
                <div className="list-item panel">
                  <a href="/du-an" className="item-cate-project ">
                    <p>Tất cả</p>
                  </a>
                  {listCategory?.map((item) => (
                    <a
                      href={`/du-an/${item._id}`}
                      className="item-cate-project "
                      key={item.id}
                    >
                      <p>{item.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-9">
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
                  Đang tải dự án...
                </div>
              ) : (
                <div>
                  {" "}
                  {listProject?.map((p, index) => (
                    <div
                      className="col-sm-4"
                     
                    >
                      <BoxNewsFull project={p} />
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
                className="btn btn-outline-success"
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
        </div>
      </article>
      <OnTop />
    </div>
  );
}

export default Project;
