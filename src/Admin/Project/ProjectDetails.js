import { React, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import ProjectApi from "../../api/ProjectApi";
import Player from "../../components/Player/Player";
import { useParams } from "react-router-dom";
import "./Project.css";

function ProjectDetailsPageAdmin() {
  const { id } = useParams();
  const [active, setActive] = useState("first");
  const [project, setProject] = useState({});
  useEffect(() => {
    const FetchProject = async () => {
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
      <article>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="title-detail-design">
                <h2 className="text-center">{project?.name}</h2>
              </div>
              <div className="txt-detail-design">
                <p>
                  <strong>Chủ đầu tư: </strong>
                  {project?.investor}
                  <br />
                  <strong>Địa điểm:&nbsp;</strong>
                  {project?.location}
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
                  <span>
                    Văn phòng được cải tạo theo phong cách mở, không quá nhiều
                    chi tiết với hai gam màu sáng( trắng) và tối( nâu gỗ) làm
                    chủ đạo . Cách bố trí nội thất tận dụng tối đa&nbsp;các
                    khoảng không gian&nbsp;và ánh sáng tự nhiên nhưng không gây
                    chật chội khó chịu cho người làm việc. Bên trong văn
                    phòng&nbsp;còn&nbsp;trang trí thêm nhiều cây xanh như:&nbsp;
                  </span>
                  Bàng Singapore
                  <span>
                    , Trầu Bà Thanh Xuân, Phát Tài Núi, Kim Tiền,…giúp nhân viên
                    giải toả căng thẳng và mang ý nghĩ hưng thịnh&nbsp;cho Công
                    ty.
                    <br />
                    Với thiết kế này&nbsp;sẽ tiết kiệm được khá nhiều chi
                    phí&nbsp;Kiến trúc - Nội thất khi&nbsp;không phân chia không
                    gian như văn phòng kín truyền thống:&nbsp;Vách ngăn, tường,…
                    Ngoài ra&nbsp;không gian mở cũng giúp giảm tải khá nhiều chi
                    phí cho các thiết bị văn phòng như ánh sáng, các thiết bị
                    vắn phòng, thông khí,...
                  </span>
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
                  {project?.image?.map((img, index) => (
                    <div key={index}>
                      <img className="img-re" alt={img.name} src={img?.url} />
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
                <Player url={project?.urlVideo} />
              </div>
            </div>
          </div>
        </div>
        <div className="container group-btn">
        <a
          href="/admin/du-an"
          type="submit"
          className="btn-admin btn btn-primary"
        >
          Quay lại
        </a>
      </div>
      </article>
    
    </div>
  );
}

export default ProjectDetailsPageAdmin;
