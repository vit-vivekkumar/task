import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

function Github() {
  return (
    <Container fluid className="resume-section">
        <Particle />
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="vit-vivekkumar"
        blockSize={15}
        blockMargin={5}
        color="#096c1c"
        fontSize={16}
        // hideColorLegend
        // hideTotalCount
      />
    </Row>
    </Container>
  );
}

export default Github;
