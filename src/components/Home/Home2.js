import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h3 style={{ fontSize: "2.5em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h3>
            <p className="home-about-body">
      Software Developer with over <b>2+ years</b> of experience in 
      <b> Python, Django, and ReactJS</b>. I hold a 
      <b> Master of Computer Applications (MCA)</b> from Vellore Institute of Technology (2023) 
      and a <b>Bachelor of Computer Applications (BCA)</b> from MCRP University (2021).
      <br />
      <br />
      I have experience in backend development with <b>Python/Django</b>, frontend development with 
      <b> ReactJS</b>, and cloud platforms like <b>AWS and GCP</b>. I have contributed to projects in 
      <b> EV charging solutions</b> and other domains, focusing on building scalable and efficient applications.
      <br />
      <br />
      I am passionate about <b>AI in Education</b> and currently working on an 
      <b> AI-Powered Tutor</b> project that provides personalized learning experiences. This project utilizes 
      <b> FastAPI, LangChain, Ollama (Llama 3.2), and DeepSeek</b>.
      <br />
      <br />
      <b></b>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li>🔹 Building scalable web applications with <b>Python</b> and <b>JavaScript</b>.</li>
        <li>🔹 Experienced in the <b>EV Charging Industry</b>, implementing <b>OCPP/OCPI</b>.</li>
        <li>🔹 Enthusiastic about <b>Cloud, DevOps, and AI/ML</b>.</li>
      </ul>
      <br />
    </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="vivek" />
            </Tilt>
          </Col>
        </Row>
        <hr/>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vit-vivekkumar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vivek-vishwakarma-15680116b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vivek_vishwakarma909/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
