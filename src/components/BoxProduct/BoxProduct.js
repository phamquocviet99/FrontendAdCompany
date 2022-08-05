import React from "react";
import "./BoxProduct.css";

function BoxProduct({ product }) {
 
  return (
    <div className="box-product"  data-aos="fade-left"
    data-aos-duration="2000">
      <a href={`/san-pham/chi-tiet/${product._id}`}>
        <img alt="" src={product?.avatar?.url}></img>
      </a>
      <div className="txt-box-product text-center">
        <a  href={`/san-pham/chi-tiet/${product._id}`}>
          <h3>{product?.commonName}</h3>
        </a>
        <h5 />
        <h4>
          <a href={`/san-pham/chi-tiet/${product._id}`}>
            <span>
              Giá: <span> {product?.price}</span>
            </span>
          </a>
        </h4>
      </div>
    </div>
  );
}

export default BoxProduct;
