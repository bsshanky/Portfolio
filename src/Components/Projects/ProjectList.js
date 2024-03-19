import React, { useState } from "react";
import "./ProjectList.css";
import GithubLogo from '../../Image/github.png';
import YoutubeLogo from '../../Image/youtube.png';
import { FaAppStoreIos } from "react-icons/fa";

const ProjectList = ({item, isLastItem}) => {
  const [show, setShow] = useState(false);

  const handleShowandCollapse = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="collapsible" onClick={handleShowandCollapse}>
          <p style={{margin: "0%"}}>
            {item.name}
          </p>
      </div>
      <div className={`colcontent ${show ? "active-project" : ""}`} >
        <p>
          <i style={{color: "#b76d35", opacity: "70%"}}>{item.subject}</i>
          <br />
          {item.des.map((roleItem, roleIndex) => (
            <li key={roleIndex}>{roleItem}</li>
          ))}
        </p>
        <p style={{fontWeight: "bold"}}>Skills used:</p>
        <div className="row" style={{margin: "15px"}}>
          {item.techused &&
            item.techused.map((tech, index) => (
              <div className="tech-used-in-project" key={index} >
                  <p>{tech.techname}</p>
                </div>
              
            ))}
        </div>

        {item.projectlink ? (
          <div className="colcontent-links">
          {/* <a href="https://linkedin.com/in/shashank-b-s" target="_blank"><img className="social-icon-project" src={YoutubeLogo}/></a> */}
          {/* <a href={item.projectlink} target="_blank"><img className="social-icon-project" src={GithubLogo}/></a> */}

          {/* Conditionally render the App Store icon or the GitHub logo */}
          {isLastItem ? (
              // Render the FaAppStoreIos icon for the last item
              <a href={item.projectlink} target="_blank"><FaAppStoreIos className="social-icon-project"/></a>
            ) : (
              // Render the GitHub logo for other items
              <a href={item.projectlink} target="_blank"><img className="social-icon-project" src={GithubLogo}/></a>
            )}
        </div>
        ) 
        :
        null}        
      </div>
    </>
  );
};

export default ProjectList;