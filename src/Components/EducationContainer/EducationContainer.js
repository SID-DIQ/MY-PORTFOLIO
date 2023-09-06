import React from 'react';
import { VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './EducationContainer.css';
//import{FaGraduationCap} from 'react-icons/fa';
import { Element } from 'react-scroll';
 const EducationContainer = () => {
  return (
    <Element className="Education">
        <VerticalTimeline lineColor="#0080fe">
            <VerticalTimelineElement className="vertical-timeline-element--education">
                <h3>Kongunadu College of Enginnering and Technology,</h3>
                <h4>Trichy</h4>
                <p> Bachelor of Engineering 
                    Electronics and Communication Engineering</p>
                <h3>CGPA : 7.737</h3>
                <h4>2020-2024</h4>        
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education">
                <h3>Bishop Heber Higher Secondary School,</h3>
                <h4>Trichy</h4>
                <p> Higher Secondary State Board </p>
                <h3>Percentage : 53.33%</h3>
                <h4>2019-2020</h4>        
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education">
                <h3>Bishop Heber Higher Secondary School,</h3>
                <h4>Trichy</h4>
                <p> SSLC State Board </p>
                <h3>Percentage : 77.4%</h3>
                <h4>2017-2018</h4>        
            </VerticalTimelineElement>
        </VerticalTimeline>
    </Element>
  )
}
export default EducationContainer