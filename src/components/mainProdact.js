import React from "react";
import { Col, Row } from "react-bootstrap";
import ProdactBox from "./prodactBox";

const MainProdact = () => {
  const allProdact = [
    {
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
      images: "https://pngimg.com/uploads/pizza/small/pizza_PNG44095.png",
      title: "domenous",
      catagory: "large",
      price: 150,
    },
    {
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
              Quidem minus quaerat repudiandae dicta autem assumenda illum
              <br />
              voluptas molestias sapiente ut.
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
