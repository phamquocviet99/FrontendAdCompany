import { React, useEffect, useState } from "react";
import "./Style/DetailsRecruit.css";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import RecruitApi from "../api/RecruitApi";

function DetailsRecruit() {
  const { id } = useParams();
  const [recruit, setRecruit] = useState({});
  useEffect(() => {
    const FetchRecruit = async () => {
      document.title="TUYỂN DỤNG"
      try {
        const response = await RecruitApi.getById(id);
        const data = JSON.parse(JSON.stringify(response));
        if (!data.error) {
          setRecruit(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchRecruit();
  }, [id]);
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
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-detail-design">
                <h2>{recruit?.name}</h2>
                <h5>15/04/2021</h5>
                <h6 />
              </div>
              <div className="title-detail-design">
                <p>
                  <strong>Phúc lợi</strong>
                </p>
                <p>
                  <div dangerouslySetInnerHTML={{ __html: recruit?.welfare }} />
                </p>
                <p>
                  <span>
                    <strong>Mô tả công viêc</strong>
                  </span>
                </p>
                <p>
                  <div
                    dangerouslySetInnerHTML={{ __html: recruit?.description }}
                  />
                </p>
                <p>
                  <span>
                    <strong>Yêu cầu công việc</strong>
                  </span>
                </p>
                <p>
                  <div
                    dangerouslySetInnerHTML={{ __html: recruit?.requirements }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default DetailsRecruit;
