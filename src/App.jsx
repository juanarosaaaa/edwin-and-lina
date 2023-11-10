import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Highlights } from "./components/highlights";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import { Milestone } from "./components/milestone";
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

  

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Highlights data={landingPageData.Highlights} />
      <Services data={landingPageData.Services} />
      <Milestone data={landingPageData.Milestone} />
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
