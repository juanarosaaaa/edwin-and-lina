import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';

export const Highlights = (props) => {
  return (
    <div id="highlights" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Highlights</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-4">
                  <Card className="horizontal-card">
                    <Card.Img variant="top" src={d.img} alt={d.title} />
                    <Card.Body>
                      <Card.Title>{d.title}</Card.Title>
                      <Card.Text>{d.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

Highlights.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      // Define the structure of each item in the array
      // Example: title, description, icon, etc.
    })
  ).isRequired,
};