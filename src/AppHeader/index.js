import React from "react";
import { Row, Col, Typography } from "antd";
import logo from "../misc/short-logo.png";
const { Text } = Typography;
const AppHeader = () => {
  return (
    <Row className="app-heaader" type="flex" gutter={[16, 16]} align="middle">
      <Col span={6} className="logo-container" id="logo">
        <img className="logo" src={logo} alt="short-logo" />
      </Col>
      <Col>
        <Text>Why Short?</Text>
      </Col>
      <Col>
        <Text>Solutions</Text>
      </Col>
      <Col>
        <Text>Features</Text>
      </Col>
      <Col>
        <Text>About me</Text>
      </Col>
    </Row>
  );
};
export default AppHeader;
