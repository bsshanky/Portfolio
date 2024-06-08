import React from "react";
import "./OutsideWork.css";

import wizard101 from "../../Image/wizard101.jpg";
import SwiftCookbook from "../../Image/SwiftCookbook.jpeg";
import dataSkeptic from "../../Image/dataSkeptic.jpeg";
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
        name: "Data Skeptic",
        source: "Spotify",
        link: "https://open.spotify.com/show/1BZN7H3ikovSejhwQTzNm4"
    },
    {
        action: "Reading",
        name: "SwiftUI Cookbook",
        source: "Juan C. Catalan",
        link: "https://www.amazon.com/SwiftUI-Cookbook-building-beautiful-interactive/dp/1805121731/ref=asc_df_1805121731/?tag=hyprod-20&linkCode=df0&hvadid=686087345901&hvpos=&hvnetw=g&hvrand=17688467522344191470&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9001982&hvtargid=pla-2271403810482&psc=1&mcid=2bf708aff79e3d9e8f8b534425d86582&gad_source=1&gclid=EAIaIQobChMIva_T0_GAhQMVv05HAR0S-wf5EAQYASABEgLIuvD_BwE"
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
    dataSkeptic,
    SwiftCookbook,
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