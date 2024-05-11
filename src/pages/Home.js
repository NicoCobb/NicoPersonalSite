// Home.js

import Layout from "./Layout";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const Home = () => {
  return (
  <div>
  <Layout/>
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  <h2>Home</h2>
  </div>);
}

export default Home;