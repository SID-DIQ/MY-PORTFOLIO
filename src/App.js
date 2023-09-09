import React from 'react'
import Header from "./Components/Header";
import SkillContainer from "./Components/SkillContainer/SkillContainer";
import TopContainer from './Components/TopContainer/TopContainer'
import EducationContainer from './Components/EducationContainer/EducationContainer';
import ContactContainer from './Components/ContactactContainer/ContactContainer';
const App =() =>{
  return (
    <div>
      <Header />
      <TopContainer />
      <SkillContainer />
      <EducationContainer />
      <ContactContainer />
    </div>
  )
}
export default App