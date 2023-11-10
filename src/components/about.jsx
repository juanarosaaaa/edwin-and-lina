import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PropTypes from 'prop-types';

export const About = (props) => {

  const customIcon = new L.Icon({
    iconUrl: "/img/placeholder.png",
    iconSize:[38,38]
  });

  return (
    <div id="about">
      <div className="container">
        <div className="row mb-1">
          <div className="col-xs-12 col-md-6">
            <img src="img/family-hernandez.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add the MapContainer here */}
        <div className="row">
          <div className="col-xs-12">
            <MapContainer
              style={{ height: "300px", width: "100%" }}
              center={[13.870985, 121.082772]}
              zoom={13}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* Add Marker */}
              <Marker position={[13.870985, 121.082772]} icon={customIcon}>
                <Popup>
                  <h3>Edwin and Lina Farm</h3>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    paragraph: PropTypes.string.isRequired,
    Why: PropTypes.arrayOf(PropTypes.string).isRequired,
    Why2: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
