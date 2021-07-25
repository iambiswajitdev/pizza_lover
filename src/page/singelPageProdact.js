import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { allProdact } from "../utility/commonStatickData";
const SingelPageProdact = () => {
  // const [singelPridact, setsingelPridact] = useState({});
  const param = useParams(allProdact);
  console.log(param);
  return (
    <>
      <div className="singelProdact">
        <Container>
          <Row>
            <Col lg={12}>
              <button className="backButton">back</button>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <div className="addToCartBox">
                <Row>
                  <Col lg={6}>
                    <img src={allProdact.images} alt="" />
                  </Col>
                  <Col lg={6}>
                    <div className="singelBox">
                      <h2 className="prodactTitle">{allProdact.title}</h2>
                      <p className="catagory"> {allProdact.title} </p>
                      <span className="prodactPrice">
                        Price : {allProdact.title} /-
                      </span>
                      <button className="orderButton">add to cart</button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SingelPageProdact;
