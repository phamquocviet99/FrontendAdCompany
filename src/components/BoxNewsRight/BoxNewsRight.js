import React from 'react';
import "./BoxNewsRight.css"

function BoxNewsRight(props) {
    return (
        <div className="box-news-right">
        <img
          alt=""
          src={require("../../images/images/news-1563348634.jpg")}
          className="img-news"
        ></img>
        <h2 className="title-inline" style={{ paddingRight: "20px" }}>
          Cách chọn mai chơi tết
        </h2>
        <div class="ed-comments-cal-right">
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
      </div>
    );
}

export default BoxNewsRight;