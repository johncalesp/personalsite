import React, { useState } from 'react';
import Navbar from './component/navbar';
import Home from './component/home';
import Footer from './component/footer';
import Experience from './component/experience';
import Projects from './component/projects';

const App = () => {
  const [home, setHome] = useState(true);
  const [experience, setExperience] = useState(false);
  const [projects, setProjects] = useState(false);

  const setActive = (tab1, tab2, tab3) => {
    setHome(tab1);
    setExperience(tab2);
    setProjects(tab3);
  };

  return (
    <div className='main'>
      <Navbar
        home={home}
        experience={experience}
        projects={projects}
        setActive={setActive}
      />
      {home && <Home />}
      {experience && <Experience />}
      {projects && <Projects />}

      <Footer />
    </div>
  );
};

export default App;
