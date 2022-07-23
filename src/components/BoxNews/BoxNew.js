import React from "react";
import "./BoxNews.css";

function ChangeDate(text) {
    if(!text)return
  return text.substring(8, 10) + "/" + text.substring(5, 7);
}

function BoxNew({ props }) {
  

  return (
    <div className="box-news">
      <a href={`/tin-tuc/chi-tiet/${props._id}`}>
        <img className="img-box-news" alt="" src={props?.urlImage}></img>
      </a>
      <div class="ed-comments-cal-right-1">
        <div class="ed-comment-right">
          <i class="fa fa-eye icon-news-home-right"></i>
          <br /> {props?.view}
        </div>
        <div class="ed-calendar-right">
          <i class="fa fa-calendar icon-news-home-right"></i>
          <br />
          {ChangeDate(props.createdAt)}
        </div>
      </div>

      <div className="txt-box-news">
        <a  href={`/tin-tuc/chi-tiet/${props._id}`}>
          <h2>{props?.name}</h2>
        </a>
        <h5/>
        <p>
        <div dangerouslySetInnerHTML={{ __html: props?.content }} />
       
        </p>
        <div className="see-more">
          <a href={`/tin-tuc/chi-tiet/${props._id}`}>
            <i class="fa fa-arrow-right"></i>
            Xem thêm
          </a>
        </div>
      </div>
    </div>
  );
}

export default BoxNew;
