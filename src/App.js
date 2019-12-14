import React from "react";
import "./App.css";
import { Typography, Button, Row, Col, Input } from "antd";
import * as firebase from "firebase";
import { firebaseConfig } from "./config";
const { Title, Text } = Typography;

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
  }
  componentDidMount() {
    firebase
      .database()
      .ref()
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val(), "snapshot");
      });
  }
  onRedirect = () => {
    window.location.assign(this.state.url);
  };
  onChange = event => {
    this.setState({ url: event.target.value });
  };
  getURL = () => {
    if (this.state.url) {
      try {
        var url = new URL(this.state.url);
        console.log(url.protocol, url.hostname, "asdsddasda");
        return "ABCD";
      } catch (e) {
        return "Error";
      }
    }
    return "";
  };
  render() {
    console.log(this.getURL());
    return (
      <Row
        className="App"
        type="flex"
        justify="center"
        align="middle"
        style={{ height: "100vh" }}
      >
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
                  <Button onClick={this.onRedirect} type="primary">
                    Redirect
                  </Button>
                </Col>
              </Row>
              <Row type="flex" justify="center" gutter={[16, 16]}>
                <Col span={24}>
                  <Text type="primary"></Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default App;
