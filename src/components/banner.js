import React from "react";
import { Col, Row } from "react-bootstrap";
import { pizzaImages } from "../utility/commonStatickData";
const Banner = () => {
  return (
    <div>
      <Row>
        <Col lg={6}>
          <div className="bannerContant">
            <h5 className="bannerText">hey you are hungry ??</h5>
            <h1 className="heroText">don't wait !</h1>
            <button className="orderButton">order now</button>
          </div>
        </Col>
        <Col lg={6} className="mainImg">
          <img className="bannerImg" src={pizzaImages} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
