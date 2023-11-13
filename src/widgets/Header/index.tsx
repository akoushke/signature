import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="position-absolute w-100">
      <Navbar className="dark-background" data-bs-theme="dark">
        {/* place a logo in here */}
        <Navbar.Brand href="#home" className="ms-3 fs-3">
          Home
        </Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            <Nav.Link className="fs-4" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="fs-4" href="#features">
              Features
            </Nav.Link>
            <Nav.Link className="fs-4" href="#pricing">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
