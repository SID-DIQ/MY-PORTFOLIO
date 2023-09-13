import React from 'react'
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
        <div className="topContent__container">
            <h1>Mr.Mohamed Siddiq </h1>
            <p>
            As a dedicated IT professional, I'm driven by my passion for innovation and technology.
            My journey in IT began with a love for coding and a curiosity for solving complex problems.
            I thrive on the challenges of this dynamic field and constantly adapt to the latest industry trends.
            I'm excited about contributing my expertise to forward-thinking companies that value excellence.
            I seek a workplace that encourages my ideas, fosters continuous learning, and supports personal and professional growth.
            </p>
            <a href="https://drive.google.com/file/d/1AjYJT3OM8zbV-NqiIogvbyLqNWBzU5TS/view?usp=sharing">
            <button className="topContent__downloadButton">Download CV</button>
        </a>       
        </div>
    </div>
  )
}

export  default TopContent
