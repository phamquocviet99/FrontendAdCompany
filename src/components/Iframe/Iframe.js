import { React } from "react";
import "./Iframe.css"
function Iframe(props) {
    return (
      <div className="responsive-iframe"
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }
  export default Iframe;