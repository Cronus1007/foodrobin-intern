import React, { Component } from "react";
import Icons from "../.umi/plugin-and-icon/icons";
import { DownCircleOutlined } from "@ant-design/icons";
const {
  LayoutFilled,
  UserOutlined,
  StepBackwardFilled,
  StepBackwardOutlined,
  DownCircleFilled,
  UpOutlined,
  DownOutlined,
} = Icons;
class NavBar extends Component {
  clicked() {
    console.log("clicked");
  }
  render() {
    return (
      <React.Fragment>
        <div className="rectangle"></div>
        <div
          onClick={this.clicked}
          id="dashboard"
          className="active activeClass ml mt"
        >
          <LayoutFilled style={{ color: "white" }} className="logo" />
          <h1>Dashboard</h1>
        </div>
        <br />
        <div className="ml mt">
          <UserOutlined style={{ color: "white" }} className="logo" />
          <h1>Franchise</h1>
        </div>
        <br />
        <div className="ml mt">
          <StepBackwardOutlined style={{ color: "white" }} className="logo" />
          <h1>Co-Franchise</h1>
        </div>
        <br />
        <div className="ml mt">
          <StepBackwardFilled style={{ color: "white" }} className="logo" />
          <h1>Agent</h1>
        </div>
        <br />
        <div className="ml mt">
          <DownCircleFilled style={{ color: "white" }} className="logo" />
          <h1>Seller</h1>
        </div>
        <br />
        <div className="ml mt">
          <DownOutlined style={{ color: "white" }} className="logo" />
          <h1>User</h1>
        </div>
        <br />
        <div className="ml mt">
          <DownCircleOutlined style={{ color: "white" }} className="logo" />
          <h1>Setting</h1>
        </div>
        <br />
        <div className="ml mt">
          <UpOutlined style={{ color: "white" }} className="logo" />
          <h1>Accounts</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
