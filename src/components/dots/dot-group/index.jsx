import React from "react";
import Dot from "../dot";

const DotGroup = ({ index, images }) => {
  const dotsGroup = images.map((image, i) => {
    let active = i === index ? true : false;
    return <Dot key={i} id={i} active={active} />;
  });

  return <div className="dots-container">{dotsGroup}</div>;
};

export default DotGroup;
