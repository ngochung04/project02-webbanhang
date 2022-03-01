import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" style={{ color: "gray", textDecoration: "none" }}>
            React-Bootstrap
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/" style={{ color: "gray", textDecoration: "none" }}>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/category"
                style={{ color: "gray", textDecoration: "none" }}
              >
                Category
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
