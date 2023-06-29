import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/main.png";
import Particle from "../Particle";
import { CgGitFork } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";


import {
  AiFillStar
} from "react-icons/ai";

import About from "../About/About";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
import Home2 from "./Home2";
// import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
            
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                 🖐
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Vivek Vishwakarma</strong>
              </h1>
              <small className="heading-mobile">
              👨‍💻  Full-Stack Software Developer
              </small>
              <div className="heading-stack">
                <h1>Full Stack Developer</h1>
                <small className="tagline">Python | ReactJS & NextJS | Django | AWS | ML | GitHub & Git | WebRTC | WebSocket | Celery and C++..</small>
              </div>
              
              <div className="git-container">
              <Nav.Item className="fork-btn">
                <Button className="fork-btn-inner"
                href="https://github.com/vit-vivekkumar"
                target="_blank"
                >
                  GitHub{" "}
                  <CgGitFork style={{ fontSize: "1em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1em" }} />
                </Button>
            </Nav.Item>
          </div>
          <div className="scroll-container">
          <div className="scroll-down">
            <span className="arrow"></span>
            <span className="text">Scroll Down</span>
          </div>
        </div>
            
            </Col>

            <Col className="image-col">
              <img
                src={homeLogo}
                alt="Vivek Kumar"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <About />
      <ResumeNew />
      <Projects />
    </section>
  );
}

export default Home;
