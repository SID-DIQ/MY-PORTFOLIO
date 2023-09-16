import React from 'react'
import Header from "./Components/Header";
import SkillContainer from "./Components/SkillContainer/SkillContainer";
import TopContainer from './Components/TopContainer/TopContainer'
import EducationContainer from './Components/EducationContainer/EducationContainer';
import ContactContainer from './Components/ContactactContainer/ContactContainer';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
const App =() =>{
  return (
    <div>
      <Header />
      <TopContainer />
      <ProjectContainer />
      <SkillContainer />
      <EducationContainer />
      <ContactContainer />
    </div>
  )
}
export default App