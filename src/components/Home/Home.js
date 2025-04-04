import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/main.png";
import Particle from "../Particle";
import { CgGitFork } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Education from "../Education";
import Workexperience from "../Workexperience";


import {
  AiFillStar
} from "react-icons/ai";

import About from "../About/About";
// import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
import Home2 from "./Home2";
import Skills from "../Skills";
import Projects from "../Projects";
// import Type from "./Type";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h2 className="heading-name">
                Hi,{" "}
                
                <strong className="main-name">I'm Vivek Kumar <span className="wave" role="img" aria-labelledby="wave">
                  🖐
                </span> </strong>
              </h2>
              <p className="home-about-body">📚Full Stack Developer with over 2+ years of experience. Adept at building scalable web applications, data-driven dashboards, and AI-powered solutions.

                <br></br>Seeking to leverage my expertise in software development to contribute to innovative projects.</p>
              <br /><p>
              📧 vivek964800@gmail.com
              <br />📞 +91 9889481855
              </p>
              {/* <small className="heading-mobile">
              👨‍💻  Full-Stack Software Developer
              </small> */}

              <div className="git-container">
                <Nav.Item className="fork-btn">
                  <Button className="fork-btn-inner"
                    href="https://github.com/vit-vivekkumar"
                    target="_blank"
                  >
                    vit-vivekkumar{' '}
                    <CgGitFork style={{ fontSize: '1em' }} />{' '}
                    <AiFillStar style={{ fontSize: '1em' }} />
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
            <hr />
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Workexperience />
      <Skills />
      <Education />
      <Projects />
      <ResumeNew />
      {/* <About /> */}
      {/* <Projects /> */}
      <h2 className="home-header">💡 Let's collaborate on exciting AI, Cloud, and Web Development projects! 🚀</h2>
    </section>
  );
}

export default Home;
