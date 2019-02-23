import * as React from "react";
require("../../styles/styles.scss");

class ProgressBar extends React.Component {
  render() {
    // let width = get(this.props, "progress", "100");
    return (
      <div className="progress-container">
        <div
          className="progress"
          style={{ height: "24px" }}
          //    width: `${width}%` }}
        />
      </div>
    );
  }
}

export default ProgressBar;
