import { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { StateContext } from "../../store/StateProvider";

const Header = () => {
  const { state } = useContext(StateContext);
  const { carts } = state;
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <NavLink to="/" style={{ color: "gray", textDecoration: "none" }}>
          React-Bootstrap
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className="mx-2"
              to="/"
              style={{ color: "gray", textDecoration: "none" }}
            >
              Home
            </NavLink>

            <NavLink
              className="mx-2"
              to="/category"
              style={{ color: "gray", textDecoration: "none" }}
            >
              Category
            </NavLink>

            {carts && carts.length > 0 ? (
              <NavLink
                to="/cart"
                style={{ color: "red", textDecoration: "none" }}
              >
                Cart
              </NavLink>
            ) : (
              <NavLink
                to="/cart"
                style={{ color: "gray", textDecoration: "none" }}
              >
                Cart
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
