import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    <Router>
      <Switch>
        <>
          <div className='main'>
            <Navbar
              home={home}
              experience={experience}
              projects={projects}
              setActive={setActive}
            />
            <Route exact path='/'>
              {home && <Home />}
            </Route>
            <Route path='/experience'>{experience && <Experience />}</Route>
            <Route path='/projects'>{projects && <Projects />}</Route>

            <Footer />
          </div>
        </>
      </Switch>
    </Router>
  );
};

export default App;
