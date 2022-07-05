import { React, useState } from "react";
import "./DivDesign1.css";
import { useTransition, animated } from "react-spring";

function DivDesign1({ project }) {
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
                <p>
                  Dịch vụ :<span> {project?.nameCategory}</span>
                </p>
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

export default DivDesign1;
