import React, { Component } from "react";
import Graphs from "./common/graphs";

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="rectangle-2"></div>
        <div>
          <h1 className="content-h1">Dashboard</h1>
        </div>

        <div>
          <Graphs />
        </div>
      </React.Fragment>
    );
  }
}

export default Content;
