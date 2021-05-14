import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ home, experience, projects, setActive }) => {
  return (
    <header className='nav-header'>
      <h3 className='nav-logo'>Data Learner</h3>
      <nav className='nav-items'>
        <Link
          to='/'
          className={`${home ? 'nav-link active' : 'nav-link'}`}
          onClick={() => {
            setActive(true, false, false);
          }}
        >
          Home
        </Link>
        <Link
          to='/experience'
          className={`${experience ? 'nav-link active' : 'nav-link'}`}
          onClick={() => {
            setActive(false, true, false);
          }}
        >
          Experience
        </Link>
        <Link
          to='/projects'
          className={`${projects ? 'nav-link active' : 'nav-link'}`}
          onClick={() => {
            setActive(false, false, true);
          }}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
