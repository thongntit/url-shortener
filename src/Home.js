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
      <Row className="App" type="flex" justify="center">
        <Col span={12}>
          <Row span={24} id="app-header">
            <AppHeader />
          </Row>
          <Row className="app-title" type="flex" gutter={[16, 16]}>
            <Col gutter={[16, 16]}>
              <Row type="flex">
                <Title>A simple,</Title>
              </Row>
              <Row type="flex">
                <Title>reliable url shortener</Title>
              </Row>
            </Col>
          </Row>
          <Row className="app-body" type="flex" gutter={[16, 16]}>
            <Col span={24}>
              <Row type="flex" justify="center" gutter={[0, 16]}>
                <Col span={20}>
                  <Input
                    className="link-input"
                    placeholder="Paste your loooooooong link here"
                    onChange={this.onChange}
                  />
                </Col>
                <Col span={4}>
                  <Button
                    className="link-button"
                    onClick={this.shorten}
                    type="primary"
                  >
                    Shorten
                  </Button>
                </Col>
              </Row>
              <Row type="flex" justify="center" gutter={[16, 16]}>
                <Col span={24}>
                  {this.state.shortenUrl ? (
                    <Text type="primary">
                      Your shorten URL: {this.state.shortenUrl}
                    </Text>
                  ) : null}
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
