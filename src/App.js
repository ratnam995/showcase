import React, { Component } from "react";
import "./App.css";
import ProjectShowcase from "./components/project-showcase";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{}}>
            <ProjectShowcase
              height={"350px"}
              width={"650px"}
              imageType={"bikes"}
            />
            <ProjectShowcase
              height={"350px"}
              width={"650px"}
              imageType={"cars"}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
