import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" >
      <Card.Body>
        <blockquote className="blockquote">
          <p>Hi, I am from Lucknow, Uttar Pradesh, currently pursuing my Master of Computer Application (MCA) degree from VIT University in Vellore. 
            <br />
            <br />With a strong passion for technology and problem-solving, I am dedicated to honing my skills and contributing to the field of software development.</p>
            <small style={{fontSize: "13px", color: "purple"}}>work experience</small><hr />
            <p className="about-activity">
              <ImPointRight /> Software Developer<br /> <small style={{ paddingLeft: "20px"}}>EVC Technologies Pvt. Ltd</small>
              <br /><small style={{ paddingLeft: "20px"}}>- February 2023 - Present </small>
            </p>
            <br />
            <p className="about-activity">
              <ImPointRight /> Python Developer Trainee<br /> <small style={{ paddingLeft: "20px"}}>Aara Technologies Private Limited</small>
              <br /><small style={{ paddingLeft: "20px"}}>- January 2022 - April 2022 </small>
            </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Unknown</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
