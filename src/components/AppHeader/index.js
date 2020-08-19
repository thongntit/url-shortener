// Library
import React from "react";
import { Row, Col, Typography } from "antd";
//Static file
import "./AppHeader.scss"
import logo from "../../static/short-logo.png";
const { Text } = Typography;
const AppHeader = () => {
  return (
    <Row type="flex" justify="center" align="">
      <Col span={14}>
        <Row className="app-heaader" type="flex" gutter={[16, 16]} align="middle" justify="space-between">
          <Col span={6} className="logo-container" id="logo">
            <img className="logo" src={logo} alt="short-logo" />
          </Col>
          <Col>
            <Row type="flex" gutter={[16, 16]} align="middle">
              <Col>
                <Text strong className="header-btn">Home</Text>
              </Col>
              <Col>
                <Text className="header-btn">Apps</Text>
              </Col>
              <Col>
                <Text className="header-btn">About me</Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>

  );
};
export default AppHeader;
