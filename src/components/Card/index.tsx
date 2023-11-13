import me from "../../assets/images/me-corona.jpg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Card = () => {
  return (
    <>
      <div className="card body-container dark-background text-light mb-3">
        <Row>
          <Col lg="8" className="pe-lg-5">
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <Row className="pb-2 pb-md-4">
                <Col className="d-flex align-items-center">
                  <h1 className="card-title title">About</h1>
                </Col>
                <Col className="d-flex justify-content-end d-lg-none">
                  <img
                    src={me}
                    className="bg-dark rounded-circle card-avatar"
                    alt="card-avatar"
                  />
                </Col>
              </Row>
              <p className="card-text fs-3 card-content ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="card-text">
                <small className="fs-4">Arash Koushkebaghi</small>
              </p>
            </div>
          </Col>

          <Col
            lg="4"
            className="d-none d-lg-flex justify-content-end  p-3 h-auto"
          >
            <img
              src={me}
              className="img-thumbnail card-image"
              alt="card-avatar"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Card;
