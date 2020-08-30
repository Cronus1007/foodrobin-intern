import React, { Component } from "react";
import { Chart, Interval, Tooltip, Axis, Coordinate } from "bizcharts";

class PieChart extends Component {
  state = {
    data: [
      { item: "a", percent: 0.4 },
      { item: "b", percent: 0.6 },
    ],
  };
  scale = (val) => {
    val = val * 100 + "%";
    return val;
  };

  render() {
    return (
      <div
        style={{
          width: "40%",
          marginLeft: "10%",
          display: "inline-block",
        }}
      >
        <h1
          style={{
            marginLeft: "31%",
            color: "#929292",
            fontFamily: "Raleway",
            fontSize: "17px",
          }}
        >
          KVC enabled to expire
        </h1>
        <div
          style={{
            backgroundColor: "#f3f3f3",
            borderRadius: "25px",
          }}
        >
          <Chart height={400} data={this.state.data} scale={this.scale} autoFit>
            <Coordinate type="theta" radius={0.75} />
            <Tooltip showTitle={false} />
            <Axis visible={false} />
            <Interval
              position="percent"
              adjust="stack"
              color="item"
              style={{
                lineWidth: 1,
                stroke: "#fff",
              }}
              label={[
                "*",
                {
                  content: (data) => {
                    return `${data.item}: ${data.percent * 100}%`;
                  },
                },
              ]}
            />
          </Chart>
        </div>
      </div>
    );
  }
}

export default PieChart;
