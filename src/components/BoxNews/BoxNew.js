import React from "react";
import "./BoxNews.css";

function BoxNew(props) {
  return (
    <div className="box-news">
      <a href="/tin-tuc/chi-tiet">
        <img
          className="img-box-news"
          alt=""
          src={require("../../images/images/news-1.jpg")}
        ></img>
      </a>
      <div class="ed-comments-cal-right-1">
        <div class="ed-comment-right">
          <i class="fa fa-eye icon-news-home-right"></i>
          <br /> 915
        </div>
        <div class="ed-calendar-right">
          <i class="fa fa-calendar icon-news-home-right"></i>
          <br />
          01/2021
        </div>
      </div>

      <div className="txt-box-news">
        <a href="/">
          <h2>trang trí sân vườn bằng đá và cây xanh</h2>
        </a>
        <h5 />
        <p>
          Dưới góc độ nghề Quy hoạch và Kiến trúc, Resort là một trong những
          loại hình công trình có nhiều cảm hứng sang tác nhất với những ý tưởng
          xuất phát từ những giá trị sinh thái tự nhiên và nhân văn nơi công
          trình tồn tại. Resort không chỉ đơn gian là phòng ngủ, nơi lưu trú với
          dịch vụ tiện nghi mà resort hướng tới giá trị đồng bộ tác động đến cảm
          xúc thư giản, nghĩ dưỡng nên thiết kế kiến trúc mở với thiên nhiên
          luôn hấp dẫn du khách. Trong thiết kế kiến trúc cho resort thì hình
          thái kiến trúc, cảnh quan không gian, thiết kế nội thất là cái hồn tạo
          nên sức hút riêng cho resort. Cảnh quan resort phục vụ cho một lượng
          khách lớn, những du khách tìm kiếm những ngày nghĩ thú vị và thư giãn,
          tạo cho du khách nhiều cơ hội giải trí. Vì vậy, cảnh quan được thiết
          kế phải tạ được cảm giác yên ắng, thanh bình, cũng như mang lại cho du
          khách nhiều hoạt động xã hội và các trò giải trí hào hứng. Việc tạo
        </p>
        <div className="see-more">
          <a href="/">
            <i class="fa fa-arrow-right"></i>
            Xem thêm
          </a>
        </div>
      </div>
    </div>
  );
}

export default BoxNew;
