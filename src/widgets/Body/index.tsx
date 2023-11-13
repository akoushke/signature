import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AboutCard from "../../components/Card";

const Body = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-100">
        <Row>
          <Col>
            <AboutCard />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Body;
