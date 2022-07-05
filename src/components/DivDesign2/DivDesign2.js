import { React, useState } from "react";
import "./DivDesign2.css";
import { useTransition, animated } from "react-spring";

function DivDesign2({project}) {
  const [isVisible1, setIsVisible1] = useState(true);
  const transition = useTransition(isVisible1, {
    from: { height: "0px", opacity: 0 },
    enter: { height: "100%", opacity: 1 },
    leave: { height: "0px", opacity: 0 },
    caonfig: { duration: 500 },
  });
  const handleMouseOver1 = () => {
    setIsVisible1((v) => !v);
  };

  return (
    <div
      className="div-design2"
      onMouseEnter={handleMouseOver1}
      onMouseLeave={handleMouseOver1}
      style={{
        backgroundImage: `url(${project?.image[0]?.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      {transition((style, item) =>
        !item ? (
          <a href={`/du-an/chi-tiet/${project._id}`}>
          <animated.div style={style} className=" content-project-1">
            <div className="info-project">
              <p>{project?.name}</p>
              <p>Địa điểm : <span> {project?.location}</span></p>
            </div>
          </animated.div>
          </a>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default DivDesign2;
