import { React, useState } from "react";
import "./DivDesign1.css";
import { useTransition, animated } from "react-spring";

function DivDesign1(props) {
  const [isVisible1, setIsVisible1] = useState(true);
  const transition = useTransition(isVisible1, {
    from: { height: "0px", opacity: 0 },
    enter: { height: "100%", opacity: 1 },
    leave: { height: "0px", opacity: 0 },
    caonfig: { duration: 100 },
  });
  const handleMouseOver1 = () => {
    setIsVisible1((v) => !v);
  };

  return (
    <div
      className="div-design1"
      onMouseEnter={handleMouseOver1}
      onMouseLeave={handleMouseOver1}
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      {transition((style, item) =>
        !item ? (
          <animated.div style={style} className=" content-project-1">
            <div className="info-project">
              <p>{props.name}</p>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default DivDesign1;
