import React from "react";
import "./ActivityCard.css";
import { MdLink } from "react-icons/md";

const ActivityCard = ({action, image, name, source, link}) => {

    return (
        <div className="activity-card">
            <p id="action">{action}</p>
            <img id="activityImage" src={image} alt={name} />
            <p id="activityName">{name}</p>
            <div className="source-container">
                {source}
                <a href={link} target="_blank"><MdLink/></a>
            </div>
        </div>
    )
}

export default ActivityCard;