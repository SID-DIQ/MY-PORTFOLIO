import React from 'react'
import "./TopContent.css";

const TopContent = () => {
  return (
    <div className="topContent">
        <div className="topContent__container">
            <h1>Mr.Mohamed Siddiq </h1>
            <p>
              I am pursuing my UG <br />
              in Kongunadu College of Engineering and Technology <br />
              in the department of Electronics and Communication Engineering, and <br />
              I am passionate  in information technology.
              </p>
            <a href="https://drive.google.com/file/d/1AjYJT3OM8zbV-NqiIogvbyLqNWBzU5TS/view?usp=sharing">
            <button className="topContent__downloadButton">Download CV</button>
        </a>       
        </div>
    </div>
  )
}

export  default TopContent
