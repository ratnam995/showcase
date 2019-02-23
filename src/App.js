import React, { Component } from "react";
import "./App.css";
import ProjectShowcase from "./components/project-showcase";
class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-main">
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
        </main>
      </div>
    );
  }
}

export default App;
