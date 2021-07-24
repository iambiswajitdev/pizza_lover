import React from "react";
import { Col, Row } from "react-bootstrap";
import ProdactBox from "./prodactBox";

const MainProdact = () => {
  const allProdact = [
    {
      _id: 12134646,
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      _id: 25465655,
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      _id: 965664446,
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      _id: 656556565,
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      _id: 10004423102425,
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      _id: 5652523236,
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      _id: 15522255555,
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      _id: 3651225572552,
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      _id: 12025800502,
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
  ];
  return (
    <>
      <div className="mainProdact">
        <Row>
          <Col lg={12}>
            <h3 className="mainHading">our prodact</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Qu idem minus quaerat repudiandae dicta autem assumenda illum
            </p>
          </Col>
        </Row>
        <Row>
          <ProdactBox allProdact={allProdact} />
        </Row>
      </div>
    </>
  );
};

export default MainProdact;
