import React from "react";
import "./App.css";
import { Typography, Button, Row, Col, Input } from "antd";
import * as firebase from "firebase";
import { makeID } from "./helper";

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
    console.log(this.state);
    return (
      <Row className="App" type="flex" justify="center" align="middle">
        <Col span={24}>
          <Row type="flex" justify="center" gutter={[16, 16]}>
            <Col span={12} gutter={[16, 16]}>
              <Row type="flex" justify="center" gutter={[16, 16]}>
                <Title type="warning">
                  Paste the input url to the textbox below
                </Title>
              </Row>
              <Row type="flex" justify="center" gutter={[16, 16]}>
                <Col span={12}>
                  <Input placeholder="Link" onChange={this.onChange} />
                </Col>
              </Row>
              <Row type="flex" justify="center" gutter={[16, 16]}>
                <Col span={24}>
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
      </Row>
    );
  }
}

export default HomePage;
