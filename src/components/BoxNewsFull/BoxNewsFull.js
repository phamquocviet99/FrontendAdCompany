import React from "react";
import "./BoxNewsFull.css";
function BoxNewsFull({ project }) {
  if (!project) {
    return (
      <div className="box-news-full">
        <img alt="" src={require("../../images/images/12.jpg")} />
        <div className="row infor-news-full">
          <div className="col-xs-12 title-post ed-food-title">
            <h2>cải tạo văn phòng novaland</h2>
            <div className="txt-news-full limit-text-about">
              <p>
                Chủ đầu tư:&nbsp;Anh Hiệp Địa điểm:&nbsp;Vĩnh Long Diện
                tích:&nbsp;120 m² Dịch vụ:&nbsp;Thiết kế kiến trúc - nội thất
                Thiết kế nội thất theo phong cách hiện đại luôn được đông đảo
                người yêu thích và lựa chọn. Bởi chúng đem lại sự tích cực, tiện
                nghi và sang trọng cho không gian sống. Thiết kế sử dụng gam màu
                trắng&nbsp;làm nền chủ đạo đã&nbsp;nổi bật toàn bộ&nbsp;nội thất
                với các gam màu tối trong căn nhà. Thêm vào đó ánh sáng đèn phối
                hợp với ánh sáng thiên nhiên&nbsp;được bố trí hài hòa tạo cảm
                giác không gian rộng rãi và rất thoáng đãng.
              </p>
            </div>
            <div className="see-more">
              <a href="/du-an/chi-tiet">
                <i className="fa fa-arrow-right"></i>
                Xem thêm
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <a
        href={`/du-an/chi-tiet/${project._id}`}
        className="box-news-full"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <img
          alt=""
          src={
            project?.image[Math.floor(Math.random() * project?.image.length)]
              .url
          }
        />

        <div className="row infor-news-full">
          <div className="col-xs-12 title-post ed-food-title">
            <h2>{project?.name}</h2>
            <div className="txt-news-full limit-text-about">
              <p>
                Chủ đầu tư : <span>{project?.investor}</span>
              </p>
              <p className="limit-txt-location">
                Địa điểm : <span>{project?.location}</span>
              </p>
            </div>
            <div className="see-more">
              <a href={`/du-an/chi-tiet/${project._id}`}>
                <i className="fa fa-arrow-right"></i>
                Xem thêm
              </a>
            </div>
            <div style={{ height: "20px" }} />
          </div>
        </div>
      </a>
    );
  }
}

export default BoxNewsFull;
