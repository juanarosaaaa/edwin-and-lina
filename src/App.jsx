import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Highlights } from "./components/highlights";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // Define a function to send the email when needed
  const sendEmail = async () => {
    try {
      // Specify recipient, subject, and text for the email
      const to = 'recipient@example.com';
      const subject = 'Hello from Nodemailer';
      const text = 'This is a test email from Nodemailer.';

      // Call the sendEmail function to send the email
      await sendEmail(to, subject, text);

      // Continue with other application logic here
    } catch (error) {
      console.error('Error in sending email:', error);
    }
  };

  // You can call the sendEmail function when needed, for example, in response to a button click
  const handleSendEmailClick = () => {
    sendEmail();
  };

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Highlights data={landingPageData.Highlights} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
