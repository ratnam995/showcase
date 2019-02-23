import * as React from "react";
require("../../styles/styles.scss");

class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progress-container">
        <div
          className="progress"
          style={{ height: "24px" }}
        />
      </div>
    );
  }
}

export default ProgressBar;
