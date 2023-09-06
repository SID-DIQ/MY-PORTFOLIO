import React from 'react'
import { Element } from 'react-scroll';
import "./SkillContainer.css";
 const SkillContainer = () => {
  return (
    <Element className="SkillContainer" id="Skills">
    <div className="Container">

        <div className="section_title center">
            <h2>Skills</h2>
        </div>
        <div className="experience-items">

        <div className="experience-item">
            <div className="experience-info">
                    <p>Java</p>
                    <p>60%</p>
                </div>
                <div className="Prograss-line" data-percent="60%">
                    <span style={{width:"60%"}}></span>
                </div>
            </div>
            <div className="experience-item">
            <div className="experience-info">
                    <p>C</p>
                    <p>70%</p>
                </div>
                <div className="Prograss-line" data-percent="70%">
                    <span style={{width:"70%"}}></span>
                </div>
            </div>
            <div className="experience-item">
            <div className="experience-info">
                    <p>HTML</p>
                    <p>50%</p>
                </div>
                <div className="Prograss-line" data-percent="50%">
                    <span style={{width:"50%"}}></span>
                </div>
            </div>
            <div className="experience-item">
            <div className="experience-info">
                    <p>CSS</p>
                    <p>50%</p>
                </div>
                <div className="Prograss-line" data-percent="50%">
                    <span style={{width:"50%"}}></span>
                </div>
            </div>
            <div className="experience-item">
            <div className="experience-info">
                    <p>JavaScript</p>
                    <p>40%</p>
                </div>
                <div className="Prograss-line" data-percent="40%">
                    <span style={{width:"40%"}}></span>
                </div>
            </div>
            <div className="experience-item">
            <div className="experience-info">
                    <p>ReactJS</p>
                    <p>40%</p>
                </div>
                <div className="Prograss-line" data-percent="40%">
                    <span style={{width:"40%"}}></span>
                </div>
            </div>
            <div className="experience-item">
            <div className="experience-info">
                    <p>Node JS</p>
                    <p>40%</p>
                </div>
                <div className="Prograss-line" data-percent="40%">
                    <span style={{width:"40%"}}></span>
                </div>
            </div>


        </div>
    </div>
    </Element>
  )
}
export default SkillContainer