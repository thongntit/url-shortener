import React from "react";
import "./App.scss";
import {Typography, Button, Row, Col, Input} from "antd";
import firebase from 'firebase/app';
import 'firebase/database';
import {makeID} from "./helper";
import AppHeader from "./AppHeader";
import Alert from "sweetalert2"

const {Title} = Typography;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      shortenUrl: ""
    };
  }

  onChange = event => {
    this.setState({url: event.target.value});
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
            this.copyToClipboard(shortUrl)
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

  copyToClipboard(text) {
    const dummy = document.createElement("textarea");
    // to avoid breaking origin page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use textarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }

  render() {
    return (
        <Row className="App" type="flex" justify="center">
          <Col span={12}>
            <Row span={24} id="app-header">
              <AppHeader/>
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
                        onKeyPress={this.onKeyPress}
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
              </Col>
            </Row>
          </Col>
        </Row>
    );
  }
}

export default HomePage;
