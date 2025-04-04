import React from "react";
import { Container } from "react-bootstrap";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import ProjectsTimelineElements from "./projectTimelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Projects() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <Container fluid className="projects-section">
      <h1 className="title">Projects</h1>
      <VerticalTimeline layout="1-column">
        {ProjectsTimelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText &&
            element.buttonLink; // Ensure button link exists

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>

              {/* Project Button */}
              {showButton && (
                <a
                  className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}
                  href={element.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    padding: "10px 20px",
                    background: "#06D6A0",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

      <hr style={{ margin: "10px" }}></hr>
    </Container>
  );
}

export default Projects;
