import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Contact from './pages/ContactMe';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const App = ()=> {
  return (
    <Router>
      <Navbar expand="lg" className='bg-body-tertiary' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Nico's Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='/projects'>Projects</Nav.Link>
            <Nav.Link href='/contact'>Contact Me</Nav.Link>
            <Nav.Link href='/about'>About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<Home/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="about" element={<AboutMe/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

