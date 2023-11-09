import React, { useRef } from 'react';
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useAlert } from 'react-alert';


const initialState = {
  user_name: "",
  user_email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ user_name, user_email, message }, setState] = useState(initialState);
  const alert = useAlert();
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotification(null);
    }, 5000);
  
    return () => clearTimeout(timeoutId);
  }, [notification]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const clearState = () => {
    setState(initialState);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ttmnvhb", "template_k5keic6", e.target, "AAzCnX-gqEst63LUE")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setNotification({ message: "Email sent successfully!", type: "success" });
          alert.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setNotification({ message: "Error sending email. Please try again.", type: "error" });
          alert.error("Error sending email. Please try again.");
        }
      );
      
      setTimeout(() => {
        setNotification(null);
      }, 5000);
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={user_name}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={user_email}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Us A Message
                </button>
              </form>
              {/* Notification Element */}
              {notification && (
                <div className={`notification ${notification.type}`}>
                  {notification.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Edwin and Lina Poultry Farm | {" "}
            <a href="https://www.termsfeed.com/live/faa6288a-ee0a-4264-90a4-3fa54c076c95" rel="">
              Privacy Policy
            </a>
             | {" "}
            <a href="https://www.termsfeed.com/live/31559517-f0b0-4dc0-8763-18c1afa95c00">
              Terms and Conditions
            </a>
            {" "}
             | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
