// ContactMe.js

import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
    return(
      <Container>
      <h2>Contact Me</h2>
      <Row sm={1} md={1} lg={1}>
      <Col>
        <a href="https://github.com/NicoCobb">Github</a>
      </Col>
      <Col>
        <a href="https://www.linkedin.com/in/nicolas-cobb-7b714a122/">LinkedIn</a>
      </Col>
      </Row>
      </Container>
    );

  }
  
  export default Contact;