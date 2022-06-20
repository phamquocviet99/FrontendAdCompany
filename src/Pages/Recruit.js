import React from "react";
import "./Style/Recruit.css";
import { motion } from "framer-motion";

function Recruit() {
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
              Tuyển dụng
            </motion.h2>
          </div>
        </div>
      </div>
      <article className="about-page-1">
        <div className="container">
          <div className="col-sm-12">
            <div className="ed-recuitment-1">
              <div className="row">
                <div className="col-sm-9">
                  <p className="name-cruit">
                    KỸ SƯ THI CÔNG CẢNH QUAN (Lương 8.000.000đ - 10.000.000đ)
                  </p>
                  <p className="des-cruit">
                    Ngày đăng : <span>2020-11-29 03:03:35</span>
                  </p>
                </div>
                <div
                  className="col-sm-3"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="/tuyen-dung/chi-tiet"
                    className="text-center"
                    style={{ marginTop: "20px", marginBottom: "30px" }}
                  >
                    <button className="btn btn-outline-success">
                      XEM THÊM
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Recruit;
