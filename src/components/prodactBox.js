import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProdactBox = ({ allProdact }) => {
  console.log(allProdact);
  return (
    <>
      <Col lg={4} xs={12}>
        <Link to={`/singelPageProdact/${allProdact._id}`}>
          <div className="box">
            <img className="boxImg" src={allProdact.images} alt="" />
            <h2 className="prodactTitle"> {allProdact.title} </h2>
            <p className="catagory"> {allProdact.catagory} </p>
            <Row>
              <Col lg={6} xs={12}>
                <span>Price : {allProdact.price}/-</span>
              </Col>
              <Col lg={6} xs={12}>
                <button className="orderButton">order now</button>
              </Col>
            </Row>
          </div>
        </Link>
      </Col>
      {/* {allProdact.map((item) => (
        
      ))} */}
    </>
  );
};

export default ProdactBox;
