import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

import { ReactComponent as WorkIcon } from "./work.svg"
import { ReactComponent as SchoolIcon } from "./school.svg"
import Github from "./About/Github";

import educationTimelineElements from "./educationTimelineElements"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"

function Education() {
  let workIconStyles = { background: "#06D6A0" }
  let schoolIconStyles = { background: "#f9c74f" }

  return (
    <div>
      <h1 className="title">📚Education</h1>
      <VerticalTimeline layout="1-column">
        {educationTimelineElements.map(element => {
          let isWorkIcon = element.icon === "work"
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== ""

          return (
            <VerticalTimelineElement
              key={element.key}
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
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }
`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
      <hr style={{ margin: '10px' }}></hr>
      <Github />
    </div>
  )
}

export default Education
