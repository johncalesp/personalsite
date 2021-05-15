import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home';
import Footer from './component/footer';
import Experience from './component/experience';
import Projects from './component/projects';

const getLocalStorage = () => {
  let tokens = localStorage.getItem('tokens');
  if (tokens) {
    return (tokens = JSON.parse(localStorage.getItem('tokens')));
  } else {
    return [true, false, false];
  }
};

const App = () => {
  const [tokens, setTokens] = useState(getLocalStorage());

  const setActive = (tab1, tab2, tab3) => {
    setTokens([tab1, tab2, tab3]);
  };

  useEffect(() => {
    localStorage.setItem('tokens', JSON.stringify(tokens));
  }, [tokens]);

  return (
    <Router>
      <Switch>
        <>
          <div className='main'>
            <Route exact path='/'>
              <Navbar
                home={true}
                experience={false}
                projects={false}
                setActive={setActive}
              />
              <Home />
            </Route>
            <Route path='/experience'>
              <Navbar
                home={false}
                experience={true}
                projects={false}
                setActive={setActive}
              />
              <Experience />
            </Route>
            <Route path='/projects'>
              <Navbar
                home={false}
                experience={false}
                projects={true}
                setActive={setActive}
              />
              <Projects />
            </Route>

            <Footer />
          </div>
        </>
      </Switch>
    </Router>
  );
};

export default App;
