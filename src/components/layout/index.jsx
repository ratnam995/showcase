import * as React from "react";
import ProjectShowcase from "../project-showcase";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state
});

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ProjectShowcase />
        <p>Hello</p>
        <pre>{JSON.stringify(this.props)}</pre>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps
)(Layout);
