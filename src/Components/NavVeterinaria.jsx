import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavVeterinaria = () => {
  return (
    <Navbar expand="lg" className="bg-dark shadow" >
      <Container>
        <Navbar.Brand href="#home" className=" text-light">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button href="#Home" variant="dark" ><i className="bi bi-github"></i> Repocitorio</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavVeterinaria;
