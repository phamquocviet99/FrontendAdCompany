import React from "react";
import "./Style/DetailsRecruit.css";
import { motion } from "framer-motion";

function DetailsRecruit() {
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
                <h2>
                  KỸ SƯ THI CÔNG CẢNH QUAN (Lương 8.000.000đ - 10.000.000đ)
                </h2>
                <h5>15/04/2021</h5>
                <h6 />
              </div>
              <div className="title-detail-design">
                <p>
                  <strong>Phúc lợi</strong>
                </p>
                <p>
                  <span>
                    - Lương tháng 13, thưởng các ngày Lễ, Tết
                    <br />
                    - Được hưởng các chế độ bảo hiểm, nghỉ phép,.. theo quy định
                    của Luật lao động
                    <br />- Được tăng lương hàng năm và khen thưởng theo dự án
                  </span>
                </p>
                <p>
                  <span>
                    <strong>Mô tả công viêc</strong>
                  </span>
                </p>
                <p>
                  <span>
                    - Quản lý, giám sát các công trình thi công cảnh quan
                  </span>
                  <br />
                  <span>
                    - Các công việc khác theo chỉ đạo của cấp trên (trao đổi
                    thêm khi phỏng vấn)
                  </span>
                </p>
                <p>
                  <span>
                    <strong>Yêu cầu công việc</strong>
                  </span>
                </p>
                <p>
                  <span >
                    - Nam, có 02-03 năm kinh nghiệm trong tổ chức, giám sát thi
                    công công trình cảnh quan
                    <br />
                    - Đọc hiểu bản vẽ Autocad
                    <br />
                    - Nắm rõ các kỹ thuật trồng và chăm sóc cây xanh
                    <br />
                    - Có khả năng quản lý đội nhóm
                    <br />- Sẵn sàng đi công tác xa
                  </span>
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
