import React from "react";
import "./OutsideWork.css";

import wizard101 from "../../Image/wizard101.jpg";
import elonMusk from "../../Image/elonMusk.jpg";
import swiftBySundell from "../../Image/swiftBySundell.jpg";
import hunterxhunter from "../../Image/hunterxhunter.jpeg";

import ActivityCard from "./ActivityCard";

const data = [
    {
        action: "Watching",
        name: "Hunter x Hunter",
        source: "Crunchyroll",
        link: "https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter"
    },
    {
        action: "Listening",
        name: "Swift by Sundell",
        source: "Spotify",
        link: "https://www.swiftbysundell.com/podcast/"
    },
    {
        action: "Reading",
        name: "Elon Musk",
        source: "Walter Isaacson",
        link: "https://www.amazon.com/Elon-Musk-Walter-Isaacson/dp/1982181281"
    },
    {
        action: "Playing",
        name: "Wizard101",
        source: "Kingsisle Entertainment",
        link: "https://www.wizard101.com"
    }
]

const images = [
    hunterxhunter,
    swiftBySundell,
    elonMusk,
    wizard101
  ]

const OutsideWork = () => {

    return (
        <div className="container outsideWork-section" id="outsidework">
            <div className="section-title">
                <p className="main-topic">Outside of Work 👨‍🎨:</p>
            </div>

            <div className="activites-container">
                {data.map((activity, index) => (
                    <ActivityCard 
                    name={activity.name} 
                    action={activity.action} 
                    source={activity.source} 
                    link={activity.link} 
                    image={images[index]}
                    />
                ))}
            </div>

        </div>
    )
}

export default OutsideWork;