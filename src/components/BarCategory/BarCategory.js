import React from "react";

function BarCategory({ current }) {
  return (
    <div>
      <div
        className="item-cate-project "
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>{current.name}</p>
        <i
          style={current.children ? { margin: "7px 0" } : { display: "none" }}
          className="fa fa-arrow-down"
        ></i>
      </div>

      {current.children ? (
        <div>
          <BarCategory />
        </div>
      ) : (
        <div>
          <BarCategory />
        </div>
      )}
    </div>
  );
}

export default BarCategory;
