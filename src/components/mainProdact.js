//import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { allProdact } from "../utility/commonStatickData";
import ProdactBox from "./prodactBox";

const MainProdact = () => {
  // const [prodact, setprodact] = useState([]);

  // const prodactData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://order-pizza-api.herokuapp.com/api/swagger.json",
  //       {
  //         mode: "no-cors",
  //       }
  //     );
  //     const actualData = await response.json();
  //     setprodact(actualData);
  //     console.log(actualData);
  //   } catch {}
  // };

  // useEffect(() => {
  //   prodactData();
  // }, []);

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
          {allProdact.map((allProdact) => (
            <ProdactBox key={allProdact._id} allProdact={allProdact} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default MainProdact;
