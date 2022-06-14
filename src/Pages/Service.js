import React from 'react'
import {motion} from 'framer-motion'
import "./Style/Service.css"

function Service() {
  return (
    <div>
      <div className='banner-service-page'> <div className="container">
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
        </div></div>
    </div>
  )
}

export default Service