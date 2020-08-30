import React, { Component } from "react";
import { Chart, Line, Point } from "bizcharts";
class LineChart extends Component {
  state = {
    data: [
      {
        month: "Jan",
        city: "Tokyo",
        temperature: 7,
      },
      {
        month: "Feb",
        city: "Tokyo",
        temperature: 6.9,
      },
      {
        month: "Mar",
        city: "Tokyo",
        temperature: 9.5,
      },
      {
        month: "Apr",
        city: "Tokyo",
        temperature: 14.5,
      },
      {
        month: "May",
        city: "Tokyo",
        temperature: 18.4,
      },
      {
        month: "Jun",
        city: "Tokyo",
        temperature: 21.5,
      },
      {
        month: "Jul",
        city: "Tokyo",
        temperature: 25.2,
      },
      {
        month: "Aug",
        city: "Tokyo",
        temperature: 26.5,
      },
      {
        month: "Sep",
        city: "Tokyo",
        temperature: 23.3,
      },
      {
        month: "Oct",
        city: "Tokyo",
        temperature: 18.3,
      },
      {
        month: "Nov",
        city: "Tokyo",
        temperature: 13.9,
      },
      {
        month: "Dec",
        city: "Tokyo",
        temperature: 9.6,
      },
    ],
  };
  render() {
    return (
      <div style={{ width: "50%", display: "inline-block" }}>
        <h1 style={{ display: "inline-block" }} className="graph-h1">
          Sellers Registration
        </h1>
        <div style={{ backgroundColor: "#f3f3f3", borderRadius: "25px" }}>
          <Chart
            scale={{ temperature: { min: 0 } }}
            padding={[30, 20, 50, 40]}
            autoFit
            height={320}
            data={this.state.data}
          >
            <Line
              shape="smooth"
              position="month*temperature"
              color="city"
              label="temperature"
            />
            <Point position="month*temperature" color="city" />
          </Chart>
        </div>
      </div>
    );
  }
}

export default LineChart;
