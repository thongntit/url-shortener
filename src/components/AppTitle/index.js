// Library
import React from "react";
import { Row, Col, Typography } from "antd";
// Static files
import "./AppTitle.scss"
import SHORTEN_PIC from "../../static/shorten.png"
const AppHeader = () => {
    return (
        <Row className="app-header" type="flex" align="middle" justify="center" >
            <Col span="10">
                <Typography.Title className="app-header-title">Create Short Link</Typography.Title>
                <Typography.Text className="app-header-text">
                    Build and protect your brand using powerful, recognizable short links.
                </Typography.Text>
            </Col>
            <Col span="4">
                <img alt="Shorten pic" src={SHORTEN_PIC} width="415" height="235" />
            </Col>
        </Row>
    );
};
export default AppHeader;
