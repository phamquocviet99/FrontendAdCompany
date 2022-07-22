import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Style/DetailsProject.css";
import { Carousel } from "react-responsive-carousel";
import Player from "../components/Player/Player";
import { useParams } from "react-router-dom";
import ProjectApi from "../api/ProjectApi";
import OnTop from "../components/BacktoTop/OnTop";
function DetailsProject() {
  const [active, setActive] = useState("first");
  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    const FetchProject = async () => {
      document.title = "DỰ ÁN";
      try {
        const response = await ProjectApi.getById(id);
        const data = JSON.parse(JSON.stringify(response));

        if (!data.error) {
          setProject(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchProject();
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
              dự án
            </motion.h2>
          </div>
        </div>
      </div>
      <article>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="title-detail-design">
                <h2 className="text-center">{project?.name}</h2>
              </div>
              <div className="txt-detail-design">
                <p>
                  <strong>Chủ đầu tư : </strong>
                  {project?.investor}
                  <br />
                  <strong>Địa điểm :&nbsp;</strong>
                  {project?.location}
                  <br /><strong>Diện tích :&nbsp;</strong>
                  {project?.area}
                  <br />
                  <strong>Dịch vụ:</strong>&nbsp;{project?.nameCategory}
                </p>
                <p
                  style={{
                    marginLeft: "0in",
                    marginRight: "0in",
                    textAlign: "justify",
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: project?.content }} />
                </p>
              </div>
            </div>
          </div>
          <div className="title-library">
            <h3 className="text-center">THƯ VIỆN</h3>
            <div className="group-button-library">
              <button
                onClick={() => {
                  setActive("first");
                }}
                className={`btn btn-success ${
                  active === "first" ? "active" : ""
                }`}
              >
                Hình ảnh
              </button>
              <div className="vertical-line"></div>
              <button
                onClick={() => {
                  setActive("second");
                }}
                className={`btn btn-success ${
                  active === "second" ? "active" : ""
                }`}
              >
                Video
              </button>
            </div>
            <div
              className="group-image"
              style={active === "first" ? { display: "" } : { display: "none" }}
            >
              <div
                className="col-md-12 col-xs-12"
                style={{ marginTop: "30px" }}
              >
                <Carousel autoPlay interval="2000" transitionTime="1000">
                  {project?.image?.map((i, index) => (
                    <div key={index}>
                      <img alt="" src={i?.url} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
            <div
              className="group-video"
              style={
                active === "second" ? { display: "" } : { display: "none" }
              }
            >
              <div
                className="col-md-12 col-xs-12"
                style={{ marginTop: "30px" }}
              >
                <Player project={project} />
              </div>
            </div>
          </div>
        </div>
      </article>
      <OnTop />
    </div>
  );
}

export default DetailsProject;
