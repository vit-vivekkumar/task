import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Vivek Kumar | Uttar Pradesh, IND 226016</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>📧 vivek964800@gmail.com |
          📞 +91 9889481855</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/vit-vivekkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-color"
              >
                <AiFillGithub size={30} />
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/vivek-kumar-15680116b/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-color"
              >
                <AiFillLinkedin size={30} />
              </a>
            </li>

            {/* Email */}
            <li className="social-icons">
              <a href="mailto:vivek964800@gmail.com" className="icon-color">
                <AiOutlineMail size={30} />
              </a>
            </li>

            {/* Phone */}
            <li className="social-icons">
              <a href="tel:+919889481855" className="icon-color">
                <AiOutlinePhone size={30} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
