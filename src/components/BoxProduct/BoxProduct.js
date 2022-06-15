import React from "react";
import "./BoxProduct.css";

function BoxProduct(props) {
    const url="/san-pham/chi-tiet"
  return (
    <div className="box-product">
      <a href={url}>
        <img alt="" src={require("../../images/images/caynoithat-1.jpg")}></img>
      </a>
      <div className="txt-box-product text-center">
        <a href={url}>
          <h3>Cây Ngọc bích</h3>
        </a>
        <h5 />
        <h4>
          <a href={url}>
            <span>Giá: 50.000</span>
          </a>
        </h4>
      </div>
    </div>
  );
}

export default BoxProduct;
