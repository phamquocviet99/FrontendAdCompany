import React from "react";
import { motion } from "framer-motion";
import "./Style/Service.css";
import BoxService1 from "../components/BoxService1/BoxService1";
import BoxService2 from "../components/BoxService2/BoxService2";

function Service() {
  return (
    <div>
      <div className="banner-service-page">
        {" "}
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
              dịch vụ
            </motion.h2>
          </div>
        </div>
      </div>
      <div className="service-page-1">
        <div className="container">
          <div className="home-title">
            <p className="font-title-home">Dịch vụ của chúng tôi</p>
          </div>
          <BoxService1></BoxService1>
          <BoxService2/>
          <BoxService1/>
          <BoxService2/>
         
          
          
        </div>
      </div>
    </div>
  );
}

export default Service;
