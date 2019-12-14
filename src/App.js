import React from "react";
import "./App.css";
import { Typography, Button, Row, Col } from "antd";
import * as firebase from "firebase";
import { firebaseConfig } from "./config";
const { Text } = Typography;

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  onRedirect = () => {
    this.setState({ redirect: true });
    window.location.assign("http://kenh14.vn");
  };
  render() {
    firebase
      .database()
      .ref()
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val(), "snapshot");
      });
    return (
      <Row className="App">
        <Col span={24}>
          <header className="App-header">
            <Text type="warning">Click the button below to redirect</Text>
            <Button onClick={this.onRedirect} type="primary">
              Redirect
            </Button>
          </header>
        </Col>
      </Row>
    );
  }
}

export default App;
