import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  
  const data = [
    {
      name: "Predicting Breast Cancer Survivability",
      subject: "Done as a part of the DS 5110's curriculum at Northeastern University", 
      des: ["Conducted a multifaceted analysis of the METABRIC dataset to forecast breast cancer survivability, leveraging diverse analytical models", 
      "Models were built using a variety of estimators and the best accuracy achieved was 72% using Random Forests",
      "Uncovered key insights revealing the Nottingham Prognostic Index (NPI) and tumor size as crucial and inversely related factors to survivability",
      "Employed four machine learning models, including SVM, Logistic Regression, Naïve Bayes, and Random Forests, culminating in the Random Forests model reaching a peak accuracy of 72% after thorough hyperparameter tuning"
    ],
      projectlink: "https://github.com/bsshanky/Predicting-Breast-Cancer-Survivability",
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
      name: "CIFAR-10 Image Classification",
      subject: "Done as a part of the DS 5220's curriculum at Northeastern University",
      des: ["Developed and compared two Deep Neural Network models for CIFAR-10 image classification: one with and one without convolutional layers, demonstrating enhanced feature extraction capabilities of CNNs", 
            "Enhanced the classification accuracy from 44% to 60% using a CNN model compared to the DNN only model, while also achieving faster convergence in the CNN model"],
      projectlink: "https://github.com/bsshanky/CIFAR-10-Image-Classification",
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
      subject: "Done as a part of the CS 5610's curriculum at Northeastern University",
      des: ["Built a MERN Stack application which showcases retro Hollywood movies", "User have a saved custom favorites list", "Notable feature is Drag n Drop which allows user to rank and re-arrange their favorites list easily"],
      projectlink: "https://github.com/bsshanky/MovieTimeMERN",
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
      subject: "Done as a part of the CS 5610's curriculum at Northeastern University",
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
    {
      name: "XML Parsing and Database Integration",
      subject: "Done as a part of the CS 5200's curriculum at Northeastern University",
      des: ["Engineered a robust and efficient XML parsing algorithm to process and categorize over 30,000+ medical journal articles, transforming complex and inconsistent data into structured dataframes", 
            "Optimized data extraction code to achieve full document parsing in fewer than 5 minutes, and seamlessly integrated the parsed data into MySQL database tables for effective data management and retrieval"],
      projectlink: "https://github.com/bsshanky/XML-Parsing-DI",
      techused: [
        {
          techname: "XML Parsing",
        },
        {
          techname: "MySQL",
        },
        {
          techname: "R Programming",
        }
      ],
    },
    {
      name: "Notes SwiftUI",
      subject: "Personal Project",
      des: ["Replicated the user interface and functionality of the native iOS Notes application, achieving a seamless user experience", 
            "Optimized the app for multi-platform compatibility, leveraging SwiftUI’s NavigationSplitView to efficiently utilize the iPad’s sidebar component",
            "Implemented Core Data to ensure persistent storage of all notes, enhancing data reliability and app performance"],
      projectlink: "https://github.com/bsshanky/Notes-SwiftUI",
      techused: [
        {
          techname: "Swift UI",
        },
        {
          techname: "Core Data",
        },
        {
          techname: "Multi-platform app",
        }
      ],
    },
    {
      name: "Digital Health Outpost",
      subject: "Project associated with Navigem Data",
      des: ["Developed an innovative iOS application in response to the COVID-19 pandemic, achieving robust data aggregation and real-time tracking to empower healthcare officials, the general public, and suppliers with crucial, actionable insights", 
            "Delivered a comprehensive solution with tailored features for symptom reporting, case management, and stock mon- itoring, significantly contributing to national efforts in crisis management and receiving recognition from the Ministry of Health and Information Technology, Government of India",
            ],
      projectlink: "https://github.com/bsshanky/Digital-Health-Outpost/",
      techused: [
        {
          techname: "Swift Programming",
        },
        {
          techname: "UIKit",
        },
        {
          techname: "Auto Layout",
        },
        {
          techname: "URLSession",
        }
      ],
    },
    {
      name: "Web Warden - App Store",
      subject: "Personal Project - Available on the iOS App Store",
      des: ["Developed an iOS application that enables users to categorically store their web URLs.", 
            "Data stored on one device automatically syncs to other devices sharing the same iCloud account.",
            ],
      projectlink: "https://apps.apple.com/us/app/web-warden/id6479176472",
      techused: [
        {
          techname: "SwiftUI",
        },
        {
          techname: "Core Data",
        },
        {
          techname: "CloudKit",
        },
        {
          techname: "Share Extension",
        },
        {
          techname: "App Groups",
        }
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
            <ProjectList item={item} isLastItem={index === data.length - 1}/>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Project;