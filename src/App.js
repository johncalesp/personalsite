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
            <Navbar
              home={tokens[0]}
              experience={tokens[1]}
              projects={tokens[2]}
              setActive={setActive}
            />
            <Route exact path='/'>
              {tokens[0] && <Home />}
            </Route>
            <Route path='/experience'>{tokens[1] && <Experience />}</Route>
            <Route path='/projects'>{tokens[2] && <Projects />}</Route>

            <Footer />
          </div>
        </>
      </Switch>
    </Router>
  );
};

export default App;
