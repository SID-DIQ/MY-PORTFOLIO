import React from 'react'
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
        <div className="topContent__container">
            <h1>Mr.Mohamed Siddiq </h1>
            <p>
            As a dedicated IT professional, I'm driven by my passion for innovation and technology.
            I'd like to work for a company that would provide me with a platform to expand my abilities
            and expertise while also assisting me in my company's ongoing growth.
            </p>
            <a href="https://drive.google.com/file/d/1spvXsGatvYUQcdXRFWhdL6YG_7O1xpw5/view?usp=sharing">
            <button className="topContent__downloadButton">Download CV</button>
        </a>       
        </div>
    </div>
  )
}

export  default TopContent
