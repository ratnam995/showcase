import * as React from "react";
import { connect } from "react-redux";
import { get } from "lodash";

import { getURLs } from "../../store/actions/getUrls";

import DotGroup from "../dots/dot-group";
import ProgressBar from "../progress-bar";
import ImageView from "../image-view";

require("../../styles/styles.scss");

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getURLs: imageType => dispatch(getURLs(imageType))
});

class ProjectShowcase extends React.Component {
  state = {
    currentIndex: 0,
    translateValue: 0
  };

  getURLs = imageType => {
    this.props.getURLs(imageType);
  };

  componentDidMount() {
    let imageType = get(this.props, "imageType", "");
    this.getURLs(imageType);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props["urlReducer"]["fetching"] &&
      prevProps["urlReducer"]["fetching"] !==
        this.props["urlReducer"]["fetching"]
    ) {
      setInterval(() => {
        this.goToNextSlide();
      }, 3000);
    }
  }

  goToNextSlide = () => {
    let imageType = get(this.props, "imageType", "10px");
    let urlReducer = get(this.props, "urlReducer", []);
    let urlReducerResult = get(urlReducer, "result", {});
    let urlList = get(urlReducerResult, imageType, []);
    if (this.state.currentIndex === urlList.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      translateValue:
        this.state.translateValue - this.slideWidth(this.state.currentIndex + 1)
    });
  };

  slideWidth = val => {
    return document.getElementById(val).clientWidth;
  };

  render() {
    let height = get(this.props, "height", "700px");
    let width = get(this.props, "width", "350px");
    let margin = get(this.props, "margin", "10px");
    let imageType = get(this.props, "imageType", "10px");
    let urlReducer = get(this.props, "urlReducer", []);
    let fetching = get(urlReducer, "fetching", false);
    let urlReducerResult = get(urlReducer, "result", {});
    let urlList = get(urlReducerResult, imageType, []);
    let currentIndex = get(this.state, "currentIndex", 0);
    return (
      <div
        style={{
          height: `${height}`,
          width: `${width}`,
          float: "left",
          margin: `${margin}`
        }}
        className="slider"
      >
        {fetching ? (
          <h1>Loading...</h1>
        ) : (
          <React.Fragment>
            <div
              className="slider-wrapper"
              style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: "transform ease-out 0.45s"
              }}
            >
              {urlList.map((photoData, index) => {
                return (
                  <ImageView
                    key={index}
                    imgId={index}
                    imageUrl={photoData["url"]}
                  />
                );
              })}
            </div>
            <DotGroup index={currentIndex} images={urlList} />
            <ProgressBar />
            {/* <ProgressBar progress={progress} /> */}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShowcase);
