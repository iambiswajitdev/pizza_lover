import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../components/banner";
import MainProdact from "../components/mainProdact";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={12}>
            <Banner />
          </Col>
        </Row>
        <Row>
          <MainProdact />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
