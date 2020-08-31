import React, { Component } from "react";
import { Layout } from "antd";
import Material from "./content";
import NavBar from "./navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "../pages/admin/admin";
import Guest from "../pages/guest/guest";
import Login from "../pages/login/login";
import Signup from "../pages/signup/signup";
import User from "../pages/user/user";
import "antd/dist/antd.css";
const { Sider, Content } = Layout;
class PageLayout extends Component {
  render() {
    return (
      <div className="height">
        <Layout>
          <Sider className="sider">
            <NavBar />
          </Sider>
          <Layout className="sider">
            {/* <Header className="sider">Header</Header> */}
            <div className="div-content">
              <Content className="content">
                <Switch></Switch>
              </Content>
            </div>
            {/* <Footer className="sider">Footer</Footer> */}
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default PageLayout;
