import { Col, Row } from "react-bootstrap";

const ProdactBox = ({ allProdact }) => {
  return (
    <>
      {allProdact.map((item, index) => (
        <Col lg={4} xs={12}>
          <div className="box" key={index}>
            <img className="boxImg" src={item.images} alt="" />
            <h2 className="prodactTitle"> {item.title} </h2>
            <p className="catagory"> {item.catagory} </p>
            <Row>
              <Col lg={6} xs={12}>
                <span>Price : {item.price}/-</span>
              </Col>
              <Col lg={6} xs={12}>
                <button className="orderButton">order now</button>
              </Col>
            </Row>
          </div>
        </Col>
      ))}
    </>
  );
};

export default ProdactBox;
