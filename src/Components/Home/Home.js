import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="container-fluid home" id="home">
      <div className="container home-content">
        <Fade right>
          <h1 id="name">Hi, I'm Shashank 🙋‍♂️</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
            <h3 style={{'color': 'white'}}>I'm a 👉 </h3>
            <h3>
            <Typewriter
              options={{
                strings: [
                  "Data Scientist",
                  "Native iOS Developer",
                  "Web Developer"
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
            </h3>
            
          </div>
        </Fade>

        <Fade bottom>
            <div className="get-resume-button">
              <a href="https://drive.google.com/file/d/1_gLWNVgKY1fxmiRSUAQL7JGDBkBl5kGs/view?usp=share_link" target="_blank" rel="noopener noreferrer">View Resume 📄</a>
            </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;


   {/* <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div> */}

       {/* <div className="button-for-action">
            <Link
              to="contactsection"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
            </Link>
            <div className="get-resume-button">
              <a href={MyCv} download="">Download Resume 📄</a>
            </div>
          </div> */}