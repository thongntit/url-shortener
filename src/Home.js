import React from "react";
import "./App.css";
import { Typography, Button, Row, Col, Input } from "antd";
import firebase from "firebase";
import { makeID } from "./helper";
import AppHeader from "./AppHeader";
const { Title, Text } = Typography;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      shortenUrl: ""
    };
  }
  onChange = event => {
    this.setState({ url: event.target.value });
  };
  shorten = () => {
    if (this.state.url) {
      try {
        let short = makeID(5);
        let shortUrl = `${window.location.href}${short}`;
        firebase
          .database()
          .ref("urlStore")
          .child(`${short}`)
          .set({
            originalUrl: this.state.url
          });
        this.setState({ shortenUrl: shortUrl });
        return;
      } catch (e) {
        this.setState({ shortenUrl: "Invalid URL" });
        return;
      }
    }
    this.setState({ shortenUrl: "" });
    return;
  };
  render() {
    return (
      <Row className="App" type="flex" justify="center" align="middle">
        <Col span={12}>
          <Col span={24} id="app-header">
            <AppHeader />
          </Col>
          <Col span={24}>
            <Row type="flex" gutter={[16, 16]}>
              <Col gutter={[16, 16]}>
                <Row type="flex">
                  <Title>A simple,</Title>
                </Row>
                <Row type="flex">
                  <Title>reliable url shortener</Title>
                </Row>
              </Col>
            </Row>
            <Row type="flex" gutter={[16, 16]}>
              <Col span={12} gutter={[16, 16]}>
                <Row type="flex" justify="center" gutter={[16, 16]}>
                  <Col span={20}>
                    <Input placeholder="Link" onChange={this.onChange} />
                  </Col>
                  <Col span={4}>
                    <Button onClick={this.shorten} type="primary">
                      Generate Link
                    </Button>
                  </Col>
                </Row>
                <Row type="flex" justify="center" gutter={[16, 16]}>
                  <Col span={24}>
                    <Text type="primary">URL: {this.state.shortenUrl}</Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
    );
  }
}

export default HomePage;
