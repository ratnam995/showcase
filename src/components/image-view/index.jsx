import * as React from "react";
import { connect } from "react-redux";
import { get } from "lodash";
require("../../styles/styles.scss");

class ImageView extends React.Component {
  render() {
    let imageUrl = get(this.props, "imageUrl", "");
    let imgId = get(this.props, "imgId", "");
    let styles = {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50% 60%"
    };
    return <div id={imgId} className="slide" style={styles} />;
  }
}

export default ImageView;
