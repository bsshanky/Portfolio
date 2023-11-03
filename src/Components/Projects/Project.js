import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  
  const data = [
    {
      name: "Predicting Breast Cancer Survivability",
      subject: "Done as a part of the DS5110's curriculum at Northeastern University", 
      des: ["Performed EDA and modelling on the world famous METABRIC breast cancer data set", "Models were built using a variety of estimators and the best accuracy achieved was 72% using Random Forests"],
      // projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "Data Cleaning",
        },
        {
          techname: "EDA",
        },
        {
          techname: "Modelling",
        },
      ],
    },
  
    {
      name: "CIFAR 10 Image Classification",
      subject: "Done as a part of the DS5220's curriculum at Northeastern University",
      des: ["Built a Neural network model with multiple convolutional layers (CNN), cross-entropy function and SGC optimiser", "Improved the performance by increasing number of layers and epochs. Accuracy ~ 65%"],
      // projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "Tensor Flow",
        },
        {
          techname: "Neural Networks",
        },
      ],
    },
  
    {
      name: "Movie Time React App",
      subject: "Done as a part of the CS5610's curriculum at Northeastern University",
      des: ["Built a MERN Stack application which showcases retro Hollywood movies", "User have a saved custom favorites list", "Notable feature is Drag n Drop which allows user to rank and re-arrange their favorites list easily"],
      projectlink: "https://github.com/bsshanky/MovieTime",
      techused: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express Js",
        },
        {
          techname: "React Drag n Drop",
        }
      ],
    },
    {
      name: "AnimeChat React App",
      subject: "Done as a part of the CS5610's curriculum at Northeastern University",
      des: ["Built a MERN Stack chat application which with individual channels dedicated to the user's favorite anime", "Enabled easy login through Google Authentication"],
      projectlink: "https://github.com/bsshanky/AnimeChat-Frontend",
      techused: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "React",
        },
        {
          techname: "Google Authentication",
        },
      ],
    },
  ];  

  return (
    <div className="container project-section" id="project">
      <div className="section-title">
        <p className="main-topic">Projects ⚒️:</p>
        <p className="prompt-message">Click each title to view or dismiss project description</p>
      </div>

      <div className="project-list">

        {data.map((item, index) => (
          <div style={{width: "100%"}} key={index}>
            <ProjectList item={item} />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Project;