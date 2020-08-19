import React from "react";
import "./App.scss";
import { Button, Row, Col, Input } from "antd";
import firebase from 'firebase/app';
import 'firebase/database';
import AppHeader from "./components/AppHeader";
import AppTitle from "./components/AppTitle";
import Alert from "sweetalert2"
import { copyToClipboard, makeID } from "./util";

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
  onKeyPress = event => {
    event.persist();
    if (event.charCode === 13) {
      this.shorten()
    }
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
        Alert.fire({
          title: "Link của bạn là",
          text: shortUrl,
          icon: "success",
          confirmButtonText: "COPY YOUR URL"
        }).then(resp => {
          if (resp.value) {
            copyToClipboard(shortUrl)
          }
        });
      } catch (e) {
        Alert.fire({
          title: "Error Occurred",
          text: "Your url's invalid format",
          icon: "error",
          confirmButtonText: "CLOSE"
        });
      }
    }
  };



  render() {
    return (
      <div className="App" >
        <div span={24} id="app-header">
          <AppHeader />
        </div>
        <div className="app-title">
          <AppTitle />
        </div>
        <div className="App-action">
          <Row className="app-body" type="flex" gutter={[16, 16]}>
            <Col span={24}>
              <Row type="flex" justify="center" gutter={[0, 16]}>
                <Input
                  className="link-input"
                  placeholder="Shorten your link"
                  onChange={this.onChange}
                  onKeyPress={this.onKeyPress}
                />
                <Button
                  className="link-button"
                  onClick={this.shorten}
                  type="primary"
                >
                  Shorten
                    </Button>
              </Row>
            </Col>
          </Row>
        </div>

      </div>
    );
  }
}

export default HomePage;
