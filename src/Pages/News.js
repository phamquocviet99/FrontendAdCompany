import React from "react";
import "./Style/News.css";
import { motion } from "framer-motion";
import BoxNew from "../components/BoxNews/BoxNew";

function News() {
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
              tin tức
            </motion.h2>
          </div>
        </div>
      </div>
      <article>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <BoxNew />
            </div>
            <div className="col-md-4">
              <BoxNew />
            </div>
            <div className="col-md-4">
              <BoxNew />
            </div>
             <div className="col-md-4">
              <BoxNew />
            </div>
            <div className="col-md-4">
              <BoxNew />
            </div>
             <div className="col-md-4">
              <BoxNew />
            </div>
            <div className="col-md-4">
              <BoxNew />
            </div>
            <div className="col-md-4">
              <BoxNew />
            </div>
            <div className="col-md-4">
              <BoxNew />
            </div>
            <div className="col-md-4">
              <BoxNew />
            </div>
             <div className="col-md-4">
              <BoxNew />
            </div> <div className="col-md-4">
              <BoxNew />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default News;
