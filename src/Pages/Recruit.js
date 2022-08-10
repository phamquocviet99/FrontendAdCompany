import React, { useEffect, useState } from "react";
import "./Style/Recruit.css";
import { motion } from "framer-motion";
import RecruitApi from "../api/RecruitApi";
import OnTop from "../components/BacktoTop/OnTop";

function Recruit() {
  const [listRecruit, setListRecruit] = useState([]);

  useEffect(() => {
    document.title = "TUYỂN DỤNG";
    const FetchListRecruit = async () => {
      try {
        const response = await RecruitApi.getAll();
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setListRecruit(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchListRecruit();
  }, [listRecruit]);
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
            {listRecruit?.map((r, index) => (
              <div className="ed-recuitment-1">
                <div className="row">
                  <div
                    className="col-sm-9"
                    data-aos="fade-right"
                    data-aos-duration={2000 + index * 500}
                  >
                    <p className="name-cruit">{r?.name}</p>
                    <p className="des-cruit">
                      Ngày đăng : <span>{r?.createdAt?.slice(0,10)}</span>
                    </p>
                  </div>
                  <div
                    className="col-sm-3"
                    data-aos="fade-left"
                    data-aos-duration={2000 + index * 500}
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href={`/tuyen-dung/chi-tiet/${r?._id}`}
                      className="text-center"
                      style={{ marginTop: "20px", marginBottom: "30px" }}
                    >
                      <a
                        href={`/tuyen-dung/chi-tiet/${r?._id}`}
                        className="btn btn-outline-success"
                      >
                        XEM THÊM
                      </a>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
      <OnTop />
    </div>
  );
}

export default Recruit;
