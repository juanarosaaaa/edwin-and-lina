import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PropTypes from 'prop-types';

export const Milestone = (props) => {
    return (
      <div id="milestone" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Milestone</h2>
          </div>
          <div className="col-md-10 col-md-offset-1 ">
            <VerticalTimeline>
              {props.data
                  ? props.data.map((d) => (
                      <VerticalTimelineElement
                          key={'${d.title}-${i}'}
                          className="vertical-timeline-element"
                          date={d.year}
                          iconStyle={{ background: "#f7dc6f", color: "#fff" }}
                      >
                          <h3 className="vertical-timeline-title">{d.title}</h3>
                          <p className="vertical-timeline-description">{d.description}</p>
                      </VerticalTimelineElement>
                  ))
              : "Loading..."}
            </VerticalTimeline>
          </div>
          
        </div>
      </div>
    );
  };

  Milestone.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
      })
    ).isRequired,
  };