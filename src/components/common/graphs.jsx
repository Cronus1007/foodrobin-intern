import React, { Component } from "react";
import PieChart from "../common/pie-chart";
import LineGraph from "../common/line-graph";
class Graphs extends Component {
  state = {};
  render() {
    return (
      <span>
        <LineGraph />
        <PieChart />
      </span>
    );
  }
}

export default Graphs;
