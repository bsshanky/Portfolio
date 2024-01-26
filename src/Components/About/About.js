import React from "react";
import "./About.css";
import ProfilePic from "../../Image/Profile-pic.jpg";
import GithubLogo from '../../Image/github.png';
import YoutubeLogo from '../../Image/youtube.png';
import LinkedInLogo from '../../Image/linkedin.png';
import EmailLogo from '../../Image/gmail.png'
import Fade from "react-reveal/Fade";

const About = () => {
  return (
     
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="dp-designation">
              <div className="about-image">
                <img src={ProfilePic} alt="User" />
              </div>
              <p className="sub-topic" >Master's in Data Science @ Northeastern (Sep'22 - May'24)</p>
              <p className="sub-topic" >📍: Boston, MA 🇺🇸</p>
              <div id="job-status">
                  <div id="green-circle"></div>
                  <p id="open-to-work">Open to full time opportunities</p>
              </div>
            </div>
          </div>

        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div className="about-description">
                    <p className="main-topic">About me 👨‍💼:</p>
                    <p className="sub-topic" style={{textAlign: "left"}}>
                        My aspiration is to achieve success as a Data Scientist by developing methodologies that facilitate comprehension of complex domains through mathematical modeling.

My specific interest lies in applying Artificial Intelligence (AI) techniques to study global warming and contribute to wildlife conservation efforts. By harnessing the power of AI, I believe we can make a positive impact on the world.<br/>

Overall, my combined skills in Data Science, AI, and Full Stack Development equip me with a diverse toolkit to tackle complex challenges and contribute to meaningful projects with the ultimate goal of improving our world. <br/>
            
                    </p>
                    <p className="sub-topic" style={{textAlign: "left"}}>
                        You can also find me on the below platforms 👇
                    </p>
                    <div id="social-media">
                        <a href="mailto:bsshanky@gmail.com"><img className="social-icon" src={EmailLogo}/></a>
                        {/* <a href="https://linkedin.com/in/shashank-b-s" target="_blank"><img className="social-icon" src={YoutubeLogo}/></a> */}
                        <a href="https://linkedin.com/in/shashank-b-s" target="_blank"><img className="social-icon" src={LinkedInLogo}/></a>
                        <a href="https://github.com/bsshanky?tab=repositories" target="_blank"><img className="social-icon" src={GithubLogo}/></a>
                    </div>
                    
                </div>
        </div>
      </div>
    </div> 

  );
};

export default About;