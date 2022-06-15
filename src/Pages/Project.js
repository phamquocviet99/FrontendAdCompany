import React from "react";
import "./Style/Project.css";
import { motion } from "framer-motion";
import BoxNewsFull from "../components/BoxNewsFull/BoxNewsFull";
function Project() {
  const listProjectCategory = [
    { id: 1, name: "Tất cả" },
    { id: 2, name: "Thiết kế Cảnh quan" },
    { id: 3, name: "Thiết kế Kiến trúc - Nội thất" },
    { id: 4, name: "Thi công Cảnh quan" },
    { id: 5, name: "Chăm sóc - bảo dưỡng cây cảnh" },
  ];
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
              dịch vụ
            </motion.h2>
          </div>
        </div>
      </div>
      <article className="project-page">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div>
                <div className="home-title">
                  <p style={{ fontSize: "20px" }} className="font-title-home">
                    danh mục dự án
                  </p>
                </div>
                <div className="list-item panel">
                  {listProjectCategory.map((item) => (
                    <a href="/" className="item-cate-project " key={item.id}>
                      <p>{item.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="col-sm-4">
                <BoxNewsFull />
                <BoxNewsFull />
                <BoxNewsFull />
              </div>
              <div className="col-sm-4">
                <BoxNewsFull />
                <BoxNewsFull />
                <BoxNewsFull />
              </div>
              <div className="col-sm-4">
                <BoxNewsFull />
                <BoxNewsFull />
                <BoxNewsFull />
              </div>
            </div>
          </div>
          <div className="pagination">
            <button style={{marginRight :"10px"}} className="btn btn-outline-success">Quay lại</button>
            <button className="btn btn-outline-success">Xem thêm</button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Project;
