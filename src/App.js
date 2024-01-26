import React, { useState, createContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Testimonial from "./Components/Testimonial/Testimonial";
import OutsideWork from "./Components/OutsideWork/OutsideWork";
import Footer from "./Components/Footer/Footer";

import ScrollToTop from "react-scroll-to-top";
import "./App.css";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div id={theme}>
        <Navbar />
        <Home changeTheme={changeTheme} theme={theme}/>
        <About />
        <WorkExperience />
        <TechStack />
        <Education />
        <Project />
        <Testimonial />
        <OutsideWork />
        <Footer />
      </div>

      <ScrollToTop
        smooth={true}
        top="20"
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
