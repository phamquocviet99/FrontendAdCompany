import React from "react";
import "./BoxNewsRight.css";

function ChangeDate(text) {
  if(!text)return
  return text.substring(8, 10) + "/" + text.substring(5, 7);
}
function BoxNewsRight({ news }) {
  return (
    <a href={`/tin-tuc/chi-tiet/${news._id}`}>
      <div className="box-news-right">
        <img alt="" src={news?.urlImage} className="img-news"></img>
        <h2 className="title-inline limitt" style={{ paddingRight: "20px" }}>
          {news?.name}
        </h2>
        <div class="ed-comments-cal-right">
          <div class="ed-comment-right">
            <i class="fa fa-eye icon-news-home-right"></i>
            <br />
            {news?.view}
          </div>
          <div class="ed-calendar-right">
            <i class="fa fa-calendar icon-news-home-right"></i>
            <br />
            {ChangeDate(news.createdAt)}
          </div>
        </div>
      </div>
    </a>
  );
}

export default BoxNewsRight;
