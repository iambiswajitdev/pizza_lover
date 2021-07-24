import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logoImages, addCart } from "../utility/commonStatickData";

const NavBar = () => {
  return (
    <>
      <div className="header">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="logo">
                <img src={logoImages} alt="" />
              </div>
            </Col>
            <Col lg={9}>
              <div className="manu">
                <ul>
                  <li>
                    <Link to="/">home</Link>
                    <Link to="/prodact">prodact</Link>
                    <Link className="addCart" to="/addTocart">
                      {addCart}
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NavBar;
