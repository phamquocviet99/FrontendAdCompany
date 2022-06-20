import React from 'react';
import "./Header.css";

const Backdrop = ({sidebar,closeBar}) => {
return <div className={sidebar?'backdrop backdrop--open':'backdrop'} onClick={closeBar}></div>
  };

export default Backdrop;