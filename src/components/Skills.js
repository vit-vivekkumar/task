import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  FaPython, FaJs, FaDatabase, FaCloud, FaTools, FaCodeBranch 
} from "react-icons/fa";

function Skills() {
  return (
    <Container fluid className="skills-section">
      <hr />
      <Container>
        <h1 className="skills-heading">
          My <strong className="purple">Skills</strong>
        </h1>

        <Row className="justify-content-center">
          {/* Languages & Frameworks */}
          <Col md={6} className="mb-4">
            <Card className="skills-card">
              <Card.Body>
                <h3><FaPython className="icon" /> Languages & Frameworks</h3>
                <p>Python (Django, Flask, FastAPI, NumPy, Pandas), JavaScript (ReactJS, AngularJS)</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Databases */}
          <Col md={6} className="mb-4">
            <Card className="skills-card">
              <Card.Body>
                <h3><FaDatabase className="icon" /> Databases</h3>
                <p>SQL, PostgreSQL, MongoDB</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Cloud & DevOps */}
          <Col md={6} className="mb-4">
            <Card className="skills-card">
              <Card.Body>
                <h3><FaCloud className="icon" /> Cloud & DevOps</h3>
                <p>AWS (Lambda, S3, SQS, SNS), Google Cloud, Firebase</p>
              </Card.Body>
            </Card>
          </Col>

          {/* APIs & Protocols */}
          <Col md={6} className="mb-4">
            <Card className="skills-card">
              <Card.Body>
                <h3><FaCodeBranch className="icon" /> APIs & Protocols</h3>
                <p>REST, WebSocket, Celery, OCPP/OCPI</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Other Tools */}
          <Col md={12} className="mb-4">
            <Card className="skills-card">
              <Card.Body>
                <h3><FaTools className="icon" /> Other Tools</h3>
                <p>GitHub, GitLab, Jira, Linux, Unit Testing, Web Scraping</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Skills;
