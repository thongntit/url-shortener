import React from "react";
import { Button, Row, Col } from "antd";
import logo from "../misc/short-logo.png";
const AppHeader = () => {
  return (
    <Row className="app-heaader" type="flex" gutter={[16, 16]}>
      <Col span={4} id="logo">
        <img style={{width: 100, height: 100}} src={logo} alt="short-logo" />
      </Col>
      <Col>
        <Button>What is this?</Button>
      </Col>
      <Col>
        <Button>Features</Button>
      </Col>
      <Col>
        <Button>About me</Button>
      </Col>
    </Row>
  );
};
export default AppHeader;
