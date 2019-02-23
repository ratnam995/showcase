import React from "react";

const Dot = ({ id, active }) => {
  const names = active ? "dot active" : "dot";
  return <div className={names} />;
};

export default Dot;
