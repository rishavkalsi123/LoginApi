import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Link to="/login">
            <Button className="btn btn-primary">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="btn btn-primary ms-3">Sign up</Button>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
