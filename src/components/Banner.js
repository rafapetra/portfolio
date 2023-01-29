import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';


export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}></Col>
          <span className="tagline">Welcome to my portfolio</span>
          <h1><span className="wrap">Hello, World.</span></h1>
        </Row>
      </Container>
    </section>
  )
}