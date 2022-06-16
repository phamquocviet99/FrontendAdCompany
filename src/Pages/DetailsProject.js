import { React, useState } from "react";
import { motion } from "framer-motion";
import "./Style/DetailsProject.css";
import { Carousel } from "react-responsive-carousel";
import Player from "../components/Player/Player"
function DetailsProject() {
  const [active, setActive] = useState("first");

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
                <h2 className="text-center">CẢI TẠO VĂN PHÒNG NOVALAND</h2>
              </div>
              <div className="txt-detail-design">
                <p>
                  <strong>Chủ đầu tư: </strong>Novaland
                  <br />
                  <strong>Địa điểm:&nbsp;</strong>Quận 3<br />
                  <strong>Dịch vụ:</strong>&nbsp;Thiết kế cảnh quan - nội thất
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
            <div className="group-image" style={(active==="first"?{display:""}:{display:"none"})}>
              <div
                className="col-md-12 col-xs-12"
                style={{ marginTop: "30px" }}
              >
                <Carousel autoPlay interval="2000" transitionTime="1000">
                  <div>
                    <img alt="" src="https://picsum.photos/700/400?img=1" />
                    <p className="legend">My Classic Still 1</p>
                  </div>
                  <div>
                    <img alt="" src="https://picsum.photos/700/400?img=2" />
                    <p className="legend">My Classic Still 2</p>
                  </div>
                  <div>
                    <img alt="" src="https://picsum.photos/700/400?img=3" />
                    <p className="legend">My Classic Still 3</p>
                  </div>
                </Carousel>
              </div>
            </div>
            <div className="group-video" style={(active==="second"?{display:""}:{display:"none"})}>
              <div
                className="col-md-12 col-xs-12"
                style={{ marginTop: "30px" }}
              >
              <Player/>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default DetailsProject;
